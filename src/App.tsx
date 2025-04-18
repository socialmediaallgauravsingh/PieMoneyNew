import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { TaxProvider } from './context/TaxContext';
import HomePage from './pages/HomePage';
import CalculatorPage from './pages/CalculatorPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <ThemeProvider>
      <TaxProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Router>
      </TaxProvider>
    </ThemeProvider>
  );
}

export default App;