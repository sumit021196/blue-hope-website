import React, { useState } from 'react';
import '../App.css';
import './AgmEgmNotice.css';

function AgmEgmNotice() {
  // Notices list (newest first)
  const notices = [
    {
      id: 2,
      title: 'Notice of adjourned AGM 2024-25 - Bluehope Solutions Limited',
      fileName: 'Notice of adjourned AGM 2024-25_Bluehope Solutions Limited.pdf'
    },
    {
      id: 1,
      title: 'Notice of 1st Annual General Meeting of the Company',
      fileName: 'Notice_of_1st_AGM_Bluehope_Solutions_Limited.pdf'
    }
  ];

  return (
    <div className="agm-page">
      <div className="agm-header">
        <h1>AGM/EGM Notice</h1>
      </div>
      
      <div className="agm-content">
        <div className="agm-notice-list">
          {notices.map(n => {
            const pdfUrl = `${window.location.origin}/pdf/${encodeURIComponent(n.fileName)}`;
            return (
              <div className="notice-item" key={n.id}>
                <h3 className="notice-title">
                  <a 
                    href={pdfUrl}
                    className="notice-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    download={n.fileName}
                  >
                    {n.title}
                  </a>
                </h3>
                <p className="notice-download">
                  <a 
                    href={pdfUrl}
                    className="download-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    download={n.fileName}
                  >
                    Download Notice PDF
                  </a>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AgmEgmNotice;
