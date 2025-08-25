import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './AgmEgmNotice.css';

function AgmEgmNotice() {
  // Sample data for notice
  const notice = {
    id: 1,
    title: 'Notice of 1st Annual General Meeting of the Company',
    content: 'This is to inform all the shareholders that the 1st Annual General Meeting of the Company will be held on Friday, the 15th day of March, 2024 at 11:00 A.M. (IST) at the Registered Office of the Company at [Company Address] to transact the following businesses...',
    pdfUrl: '#'
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
              <Link to="#" className="notice-link">{notice.title}</Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgmEgmNotice;
