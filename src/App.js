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
import StockExchangeDisclosure from './pages/StockExchangeDisclosure';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import ScrutinizersReportsPage from './pages/ScrutinizersReportsPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <CssBaseline />
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
          <Route path="/stock-exchange-disclosure" element={<StockExchangeDisclosure />} />
          <Route path="/shareholders-help-desk/scrutinizers-reports" element={<ScrutinizersReportsPage />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App; 
