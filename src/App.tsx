import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import TermosGarantia from './components/TermosGarantia';
import Remarketing from './components/Remarketing';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/termos-garantia" element={<TermosGarantia />} />
          <Route path="/remarketing" element={<Remarketing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
