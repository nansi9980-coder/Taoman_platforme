import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export const Header = ({ activeLink = 'accueil' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (e) {
        console.error("Erreur parsing user data", e);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.location.reload();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-lg backdrop-blur-md bg-opacity-95' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105">
          <img
            src={logo}
            alt="Taoman Groupe"
            className="h-12 w-auto object-contain drop-shadow-md"
          />
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: 'Accueil', href: '/', key: 'accueil' },
            { name: 'Services', href: '/services', key: 'services' },
            { name: 'Investissement', href: '/investissement', key: 'investissement' },
            { name: 'Devis', href: '/devis', key: 'devis' },
            { name: 'Jobs', href: '/jobs', key: 'jobs' },
            { name: 'Contact', href: '/contact', key: 'contact' },
            { name: 'À propos', href: '/about', key: 'about' },
          ].map((link) => (
            <Link
              key={link.key}
              to={link.href}
              className={`relative font-semibold transition-colors duration-300 ${
                activeLink === link.key
                  ? 'text-primary'
                  : 'text-on-surface hover:text-primary'
              } group`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                activeLink === link.key ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
        </nav>

        {/* Boutons Right */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="hidden sm:flex items-center gap-3">
              <div className="flex items-center gap-2 cursor-pointer bg-surface-container-low px-3 py-1.5 rounded-full border border-outline-variant">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                  {user.firstName ? user.firstName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
                </div>
                <span className="font-bold text-on-surface text-sm">{user.firstName || 'Client'}</span>
              </div>
              <button
                onClick={handleLogout}
                className="text-sm font-bold text-error hover:underline"
              >
                Déconnexion
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/connexion"
                className="hidden sm:block px-5 py-2.5 text-primary font-bold text-sm border-2 border-primary rounded-lg transition-all duration-300 hover:bg-primary hover:text-white"
              >
                Connexion
              </Link>
              <Link
                to="/inscription"
                className="hidden sm:block px-5 py-2.5 bg-gradient-to-r from-primary to-primary-container text-white font-bold text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                S'inscrire
              </Link>
            </>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-on-surface hover:text-primary transition-colors"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant shadow-xl animate-fade-down">
          <nav className="flex flex-col gap-0 p-6">
            {[
              { name: 'Accueil', href: '/', key: 'accueil' },
              { name: 'Services', href: '/services', key: 'services' },
              { name: 'Investissement', href: '/investissement', key: 'investissement' },
              { name: 'Devis', href: '/devis', key: 'devis' },
              { name: 'Jobs', href: '/jobs', key: 'jobs' },
              { name: 'Contact', href: '/contact', key: 'contact' },
              { name: 'À propos', href: '/about', key: 'about' },
            ].map((link) => (
              <Link
                key={link.key}
                to={link.href}
                className="py-3 px-4 text-on-surface hover:text-primary hover:bg-surface-container rounded-lg transition-all duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-outline-variant mt-4 pt-4 space-y-2">
              {user ? (
                <>
                  <div className="flex items-center gap-3 px-4 py-2">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                      {user.firstName ? user.firstName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-bold text-on-surface">{user.firstName || 'Client'}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="block w-full py-2.5 text-center text-error font-bold border-2 border-error rounded-lg hover:bg-error hover:text-white transition-all"
                  >
                    Déconnexion
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/connexion"
                    className="block w-full py-2.5 text-center text-primary font-bold border-2 border-primary rounded-lg transition-all duration-300 hover:bg-primary hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    Connexion
                  </Link>
                  <Link
                    to="/inscription"
                    className="block w-full py-2.5 text-center bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-all"
                    onClick={() => setMenuOpen(false)}
                  >
                    S'inscrire
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};