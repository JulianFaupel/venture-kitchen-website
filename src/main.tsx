import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UseCasePage from './UseCasePage';
import App from './App.tsx';
import Contact from './pages/Contact.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/anwendungsbereiche/:slug" element={<UseCasePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
