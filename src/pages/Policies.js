import React from 'react';
import './Policies.css';

const policies = [
  "Archival policy.pdf",
  "Board Diversity Policy.pdf",
  "Criteria for making payment to Non- Executive Director.pdf",
  "Dividend Distribution Policy.pdf",
  "Materiality Policy as per Regulation 30 (4).pdf",
  "Nomination Remuneration Policy.pdf",
  "Policy for Material Subsidiary.pdf",
  "Policy on Prevention of sexual harassment at work place.pdf",
  "Related Party Transaction Policy.pdf",
  "Risk Management Policy.pdf",
  "Vigil Mechanism Whistle Blower Policy.pdf"
];

const Policies = () => {
  return (
    <div className="policies-container">
      <h1>Policies</h1>
      <div className="policies-grid">
        {policies.map(policy => (
          <div className="policy-card" key={policy}>
            <h3>{policy.replace('.pdf', '')}</h3>
            <a href={`/pdf/${policy}`} download>
              Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Policies; 