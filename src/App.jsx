import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { InvestmentPage } from './pages/InvestmentPage';
import { JobsPage } from './pages/JobsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { QuotePage } from './pages/QuotePage';
import { LoginPage } from './pages/LoginregisterPage';
import { RegisterPage } from './pages/RegisterPage';
import { LegalPage } from './pages/LegalPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Pages Principales */}
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/investissement" element={<InvestmentPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          
          {/* Pages Secondaires */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/devis" element={<QuotePage />} />
          
          {/* Authentification */}
          <Route path="/connexion" element={<LoginPage />} />
          <Route path="/inscription" element={<RegisterPage />} />
          
          {/* Légal */}
          <Route path="/mentions-legales" element={<LegalPage />} />
          <Route path="/confidentialite" element={<PrivacyPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;