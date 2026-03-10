const http = require('http');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// Load credentials from vault
const vault = JSON.parse(fs.readFileSync('/root/.openclaw/credentials/vault.json', 'utf8'));
const creds = vault.venturekitchen;

const transporter = nodemailer.createTransport({
  host: creds.smtp_server,
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: creds.email,
    pass: creds.password
  }
});

const PORT = 3201;

const server = http.createServer((req, res) => {
  // CORS headers
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
        const { name, email, phone, subject, message } = data;

        if (!name || !email || !subject || !message) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, error: 'Alle Pflichtfelder ausfüllen' }));
        }

        // Build table row helper
        const row = (label, value) => value ? `<tr><td style="padding: 10px 12px; border-bottom: 1px solid #eee; font-weight: bold; color: #333; width: 140px;">${label}</td><td style="padding: 10px 12px; border-bottom: 1px solid #eee; color: #555;">${value}</td></tr>` : '';

        // Send notification email
        const htmlBody = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px;">
            <div style="background: linear-gradient(135deg, #f700ff 0%, #a855f7 50%, #0080FF 100%); color: white; padding: 20px 24px; border-radius: 8px 8px 0 0;">
              <h2 style="margin: 0; font-size: 20px;">Neue Kontaktanfrage</h2>
              <p style="margin: 6px 0 0; opacity: 0.9; font-size: 14px;">via venturekitchen.io</p>
            </div>
            <div style="border: 1px solid #eee; border-top: none; border-radius: 0 0 8px 8px; overflow: hidden;">
              <table style="border-collapse: collapse; width: 100%;">
                <tr style="background: #f8f9fa;">
                  <td colspan="2" style="padding: 10px 12px; font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Kontaktdaten</td>
                </tr>
                ${row('Name', name)}
                ${row('E-Mail', `<a href="mailto:${email}" style="color: #a855f7;">${email}</a>`)}
                ${row('Telefon', phone || '-')}
                ${row('Betreff', subject)}
                <tr style="background: #f8f9fa;">
                  <td colspan="2" style="padding: 10px 12px; font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Nachricht</td>
                </tr>
                <tr><td colspan="2" style="padding: 12px; color: #555; white-space: pre-wrap;">${message}</td></tr>
              </table>
            </div>
            <p style="color: #aaa; font-size: 11px; margin-top: 16px;">venturekitchen.io · ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}</p>
          </div>
        `;

        await transporter.sendMail({
          from: `"Venture Kitchen Website" <${creds.email}>`,
          to: 'julian.faupel@venturekitchen.io',
          replyTo: email,
          subject: `Kontaktanfrage: ${subject}`,
          html: htmlBody
        });

        // Log submission
        const logEntry = { timestamp: new Date().toISOString(), name, email, phone, subject, message };
        const logFile = path.join(__dirname, 'submissions.log');
        fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');

        console.log(`[${new Date().toISOString()}] New submission from ${name} <${email}>`);

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
  console.log(`Venture Kitchen form handler running on port ${PORT}`);
});
