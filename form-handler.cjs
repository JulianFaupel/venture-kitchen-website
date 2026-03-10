const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3201;

// Graph API for sending via Exchange
const TENANT_ID = 'bf4e1ddf-80cb-4c06-8c3c-3143eb4e5caf';
const CLIENT_ID = '66866f96-1b4d-4325-bbc9-2410eeb26561';
const vault = JSON.parse(fs.readFileSync('/root/.openclaw/credentials/vault.json', 'utf8'));
const CLIENT_SECRET = vault.centurion_m365?.client_secret || '';
const SENDER = 'JulianFaupel@CenturionGmbH776.onmicrosoft.com';
const NOTIFY_EMAIL = 'julian.faupel@venturekitchen.io';

let accessToken = null;
let tokenExpiry = 0;

async function getAccessToken() {
  if (accessToken && Date.now() < tokenExpiry) return accessToken;
  
  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    scope: 'https://graph.microsoft.com/.default',
    grant_type: 'client_credentials'
  });

  const resp = await fetch(`https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString()
  });

  const data = await resp.json();
  accessToken = data.access_token;
  tokenExpiry = Date.now() + (data.expires_in - 60) * 1000;
  return accessToken;
}

async function sendEmail(to, subject, htmlBody) {
  const token = await getAccessToken();
  const resp = await fetch(`https://graph.microsoft.com/v1.0/users/${SENDER}/sendMail`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: {
        subject,
        body: { contentType: 'HTML', content: htmlBody },
        toRecipients: [{ emailAddress: { address: to } }]
      }
    })
  });
  if (!resp.ok) throw new Error(`Graph API error: ${resp.status} ${await resp.text()}`);
}

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    return res.end();
  }

  if (req.method === 'POST' && req.url === '/api/contact') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        const data = JSON.parse(body);
        const { name, email, phone, subject: subj, message } = data;

        if (!name || !email) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, error: 'Name und E-Mail sind Pflichtfelder' }));
        }

        const row = (label, value) => value ? `<tr><td style="padding: 10px 12px; border-bottom: 1px solid #eee; font-weight: bold; color: #333; width: 180px;">${label}</td><td style="padding: 10px 12px; border-bottom: 1px solid #eee; color: #555;">${value}</td></tr>` : '';

        const htmlBody = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px;">
            <div style="background: #1a1a2e; color: white; padding: 20px 24px; border-radius: 8px 8px 0 0;">
              <h2 style="margin: 0; font-size: 20px;">Neue Kontaktanfrage</h2>
              <p style="margin: 6px 0 0; opacity: 0.85; font-size: 14px;">via venturekitchen.io Kontaktformular</p>
            </div>
            <div style="border: 1px solid #eee; border-top: none; border-radius: 0 0 8px 8px; overflow: hidden;">
              <table style="border-collapse: collapse; width: 100%;">
                <tr style="background: #f8f9fa;">
                  <td colspan="2" style="padding: 10px 12px; font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Kontaktdaten</td>
                </tr>
                ${row('Name', name)}
                ${row('E-Mail', `<a href="mailto:${email}" style="color: #6366f1;">${email}</a>`)}
                ${row('Telefon', phone)}
                ${row('Betreff', subj)}
                ${message ? `
                <tr style="background: #f8f9fa;">
                  <td colspan="2" style="padding: 10px 12px; font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Nachricht</td>
                </tr>
                <tr><td colspan="2" style="padding: 12px; color: #555;">${message.replace(/\n/g, '<br>')}</td></tr>
                ` : ''}
              </table>
            </div>
            <p style="color: #aaa; font-size: 11px; margin-top: 16px;">venturekitchen.io · ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}</p>
          </div>
        `;

        const emailSubject = `Neue Kontaktanfrage: ${name}${subj ? ` – ${subj}` : ''}`;

        await sendEmail(NOTIFY_EMAIL, emailSubject, htmlBody);

        // Log submission
        const logEntry = { timestamp: new Date().toISOString(), name, email, phone, subject: subj, message };
        const logFile = path.join(__dirname, 'vk-submissions.log');
        fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');

        console.log(`[${new Date().toISOString()}] VK submission from ${name} <${email}>`);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Anfrage erfolgreich gesendet' }));

      } catch (err) {
        console.error('Error:', err.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Serverfehler' }));
      }
    });
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`VK form handler running on port ${PORT}`);
});
