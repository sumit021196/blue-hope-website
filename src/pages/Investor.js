import React, { useState, useEffect } from 'react';
import PDFCard from '../components/PDFCard';
import DisclosureCard from '../components/DisclosureCard';
import './Investor.css';

function Investor() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('Fetching reports...');
      
      const apiUrl = process.env.NODE_ENV === 'production' 
        ? '/.netlify/functions/api/list-files'
        : 'http://localhost:3000/api/list-files';

      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Received files:', data);

      if (!data || data.length === 0) {
        setFiles([]);
        setError('No reports available');
      } else {
        // Sort files by year and quarter
        const sortedFiles = data.sort((a, b) => {
          const yearA = a.year || parseInt(a.name.match(/(\d{4})/)[1]);
          const yearB = b.year || parseInt(b.name.match(/(\d{4})/)[1]);
          const quarterA = a.quarter || a.name.match(/Q(\d)/)[1];
          const quarterB = b.quarter || b.name.match(/Q(\d)/)[1];
          return yearB - yearA || quarterB - quarterA;
        });
        setFiles(sortedFiles);
      }
    } catch (error) {
      console.error('Error fetching reports:', error);
      setError('Failed to fetch reports. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    fetchReports();
  };

  if (loading) {
    return (
      <div className="investor-container">
        <div className="loading">
          <h2>Loading reports...</h2>
          <p>Please wait while we fetch the latest financial reports.</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="investor-container">
        <div className="error">
          <h3>Failed to load reports</h3>
          <p>{error}</p>
          <button onClick={handleRetry} className="btn btn-primary">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="investor-container">
      <h1>Financial Reports</h1>
      <div className="pdf-grid">
        {files.map(file => (
          <PDFCard key={file.name} file={file} />
        ))}
      </div>
  
      <h1 style={{ marginTop: '2rem' }}>Stock Exchange Disclosures</h1>
      <div className="pdf-grid">
        {[
          {
            title: 'Newspaper Publication of Notice of Adjourned 1st AGM dated 26.09.2025 - Bluehope Solutions',
            fileName: 'Newspaper Publication of Notice of Adjourned 1st AGM dated 26.09.2025_Bluehope Solutions.pdf'
          }
        ].map((d) => {
          const pdfUrl = `${window.location.origin}/pdf/${encodeURIComponent(d.fileName)}`;
          return (
            <DisclosureCard
              key={d.fileName}
              title={d.title}
              pdfUrl={pdfUrl}
              fileName={d.fileName}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Investor; 
