import React from 'react';
import DisclosureCard from '../components/DisclosureCard';
import './Investor.css';

function StockExchangeDisclosure() {
  const disclosures = [
    {
      title: 'Newspaper Publication of Notice of Adjourned 1st AGM dated 26.09.2025 - Bluehope Solutions',
      fileName: 'Newspaper Publication of Notice of Adjourned 1st AGM dated 26.09.2025_Bluehope Solutions.pdf'
    }
  ];

  return (
    <div className="investor-container">
      <h1>Stock Exchange Disclosures</h1>
      <div className="pdf-grid">
        {disclosures.map((d) => {
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

export default StockExchangeDisclosure;


