import React from 'react';
import { AlertCircle } from 'lucide-react';
import './NotFound.css';

export default function NotFound() {
  return (
    <main className="notfound-container">
      <div className="notfound-bg"></div>
      
      <div className="notfound-content">
        <div className="notfound-icon-box">
          <AlertCircle className="notfound-icon" />
        </div>

        <h1 className="notfound-title">Page not Found</h1>
        
        <p className="notfound-text">
          This page cant be transcribed. It looks like this page has <br className="desktop-br" />
          left the meeting - or maybe it never joined.
        </p>

        <a href="/" className="notfound-btn">
          Go Home
        </a>
      </div>
    </main>
  );
}
