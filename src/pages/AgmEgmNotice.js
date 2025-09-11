import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './AgmEgmNotice.css';

function AgmEgmNotice() {
  // Notice data with PDF download link
  const notice = {
    id: 1,
    title: 'Notice of 1st Annual General Meeting of the Company',
    content: 'This is to inform all the shareholders that the 1st Annual General Meeting of the Company will be held on Friday, the 15th day of March, 2024 at 11:00 A.M. (IST) at the Registered Office of the Company to transact the following businesses...',
    pdfUrl: `${window.location.origin}/pdf/Notice_of_1st_AGM_Bluehope_Solutions_Limited.pdf`,
    fileName: 'Notice_of_1st_AGM_Bluehope_Solutions_Limited.pdf'
  };

  return (
    <div className="agm-page">
      <div className="agm-header">
        <h1>AGM/EGM Notice</h1>
      </div>
      
      <div className="agm-content">
        <div className="agm-notice-list">
          <div className="notice-item">
            <h3 className="notice-title">
              <a 
                href={notice.pdfUrl} 
                className="notice-link" 
                target="_blank" 
                rel="noopener noreferrer"
                download={notice.fileName}
              >
                {notice.title}
              </a>
            </h3>
            <p className="notice-download">
              <a 
                href={notice.pdfUrl} 
                className="download-link" 
                target="_blank" 
                rel="noopener noreferrer"
                download={notice.fileName}
              >
                Download Notice PDF
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgmEgmNotice;
