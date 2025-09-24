import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './InvestorDropdown.css';

const menuItems = [
  { label: 'Financial Results', to: '/financial-results' },
  { label: 'Shareholding Pattern' },
  { label: 'Stock Exchange Disclosure', to: '/stock-exchange-disclosure' },
  { label: 'Investor Grievance' },
  {
    label: 'Code Of Conduct',
    submenu: [
      { label: 'Directors' },
      { label: 'Employees' }
    ]
  },
  {
    label: 'Statutory Document',
    submenu: [
      { label: 'Annual Return' },
      { label: 'Other Statutory' }
    ]
  },
  {
    label: "Shareholder's Help Desk",
    submenu: [
      { label: 'Contact' },
      { label: 'FAQ' },
      { label: 'AGM/EGM Notice', to: '/agm-egm-notice' }
    ]
  },
  { label: 'Policies', to: '/policies' },
  { label: 'Corporate Governance' },
];

function InvestorDropdown() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="dropdown-menu">
      {menuItems.map((item, idx) => (
        <div
          className={`dropdown-item${item.submenu ? ' has-submenu' : ''}`}
          key={item.label}
          onMouseEnter={() => setOpenIndex(idx)}
          onMouseLeave={() => setOpenIndex(null)}
        >
          {item.to ? (
            <Link to={item.to} className="dropdown-link">{item.label}</Link>
          ) : (
            <span>{item.label}{item.submenu && <span className="arrow">&#8250;</span>}</span>
          )}
          {item.submenu && openIndex === idx && (
            <div className="submenu">
              {item.submenu.map(sub => (
                sub.to ? (
                  <Link to={sub.to} className="submenu-item" key={sub.label}>
                    {sub.label}
                  </Link>
                ) : (
                  <div className="submenu-item" key={sub.label}>
                    {sub.label}
                  </div>
                )
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default InvestorDropdown;
