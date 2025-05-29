import React, { useState, useEffect } from 'react';
import PDFCard from '../components/PDFCard';
import './Investor.css'; // Reuse the same styles

function FinancialResults() {
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
      console.log('Fetching financial results...');
      const apiUrl = process.env.NODE_ENV === 'production'
        ? '/.netlify/functions/api/list-files'
        : 'http://localhost:3000/api/list-files';
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw new Error('Failed to fetch results');
      const data = await response.json();
      setFiles(data.files || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="investor-container">
      <h1>Financial Results</h1>
      {loading ? (
        <div className="loading"><h2>Loading...</h2></div>
      ) : error ? (
        <div className="error"><h3>Error</h3><p>{error}</p></div>
      ) : (
        <div className="pdf-grid">
          {files.map((file, idx) => (
            <PDFCard key={idx} file={file} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FinancialResults;
