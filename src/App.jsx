import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CamidiPage from './pages/CamidiPage';
import HowItWorksPage from './pages/HowItWorksPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter basename="/TableOrders-Landing">
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
