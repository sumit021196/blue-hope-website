import React from 'react';
import './PDFCard.css';

function DisclosureCard({ title, pdfUrl, fileName }) {
  return (
    <div className="pdf-card">
      <div className="pdf-card-header">
        <h3>{title}</h3>
      </div>
      <div className="pdf-card-body">
        <div className="pdf-actions">
          <a
            href={pdfUrl}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <a
            href={pdfUrl}
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
            download={fileName}
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

export default DisclosureCard;


