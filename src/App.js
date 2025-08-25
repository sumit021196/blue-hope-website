import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Investor from './pages/Investor';
import FinancialResults from './pages/FinancialResults';
import Policies from './pages/Policies';
import Contact from './pages/Contact';
import AgmEgmNotice from './pages/AgmEgmNotice';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/investor" element={<Investor />} />
          <Route path="/financial-results" element={<FinancialResults />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/agm-egm-notice" element={<AgmEgmNotice />} />
        </Routes>
      </main>
    </div>
  );
}

export default App; 