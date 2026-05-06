import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import CamidiPage from './pages/CamidiPage';
import HowItWorksPage from './pages/HowItWorksPage';
import AboutPage from './pages/AboutPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter basename="/TableOrders-Landing">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/camidi" element={<CamidiPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
