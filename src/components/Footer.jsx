import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-on-background to-on-background/95 text-on-primary pt-16 pb-8">
      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Column 1 - Brand */}
        <div className="group">
          {/* 🔴 AJOUTER LE LOGO ICI: src/assets/logo-white.png */}
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="Taoman Groupe" className="h-10 bg-white rounded-lg p-1" />
            <div>
              <h3 className="text-lg font-bold">Taoman Groupe</h3>
              <p className="text-xs text-outline-variant">Excellence & Confiance</p>
            </div>
          </div>
          <p className="text-outline-variant text-sm leading-relaxed">
            Votre partenaire de confiance pour l'investissement transparent et les services professionnels de qualité supérieure.
          </p>
        </div>

        {/* Column 2 - Navigation */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-surface">Navigation</h4>
          <ul className="space-y-2">
            {[
              { name: 'Accueil', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Investissement', href: '/investissement' },
              { name: 'Devis', href: '/devis' },
              { name: 'Jobs', href: '/jobs' },
              { name: 'Contact', href: '/contact' },
              { name: 'À propos', href: '/about' },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-outline-variant hover:text-primary-fixed transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  {link.name} →
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Services */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-surface">Accès rapides</h4>
          <ul className="space-y-2">
            {[
              { name: 'Demande de devis', href: '/devis' },
              { name: 'Lavage Auto', href: '/lavage-auto/devis' },
              { name: 'Déménagement', href: '/demenagement/devis' },
              { name: 'Entretien Bureau', href: '/entretien/bureaux' },
              { name: 'Climatisation', href: '/entretien/climatisation' },
              { name: 'Personnel Déménagement', href: '/demenagement/personnels' },
              { name: 'Investissement TIE', href: '/investissement/tie' },
              { name: 'Simulateur', href: '/investissement/simulateur' },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-outline-variant hover:text-primary-fixed transition-colors duration-300 hover:translate-x-1 inline-block text-sm"
                >
                  {link.name} →
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-surface">Contact</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <p className="text-sm text-outline-variant">Vakpossito, Lomé</p>
                <p className="text-sm text-outline-variant">Togo</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📞</span>
              <a href="tel:+22890421377" className="text-primary-fixed font-bold hover:text-surface transition-colors">
                +228 90 42 13 77
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">✉️</span>
              <a href="mailto:taomancontact@gmail.com" className="text-primary-fixed font-bold hover:text-surface transition-colors break-all text-sm">
                taomancontact@gmail.com
              </a>
            </div>
            <p className="text-sm text-outline-variant">24h/24, 7j/7</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6 border-t border-surface-variant/20 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Social Links */}
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#" className="w-10 h-10 bg-primary-container/20 hover:bg-primary-container rounded-full flex items-center justify-center transition-all hover:scale-110">
              <span className="text-surface">f</span>
            </a>
            <a href="#" className="w-10 h-10 bg-primary-container/20 hover:bg-primary-container rounded-full flex items-center justify-center transition-all hover:scale-110">
              <span className="text-surface">in</span>
            </a>
            <a href="#" className="w-10 h-10 bg-primary-container/20 hover:bg-primary-container rounded-full flex items-center justify-center transition-all hover:scale-110">
              <span className="text-surface">🐦</span>
            </a>
            <a href="#" className="w-10 h-10 bg-primary-container/20 hover:bg-primary-container rounded-full flex items-center justify-center transition-all hover:scale-110">
              <span className="text-surface">▶</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center text-outline-variant text-sm">
            © 2024 Taoman Groupe. Tous droits réservés.
          </p>

          {/* Legal Links */}
          <div className="flex gap-4 justify-center md:justify-end text-sm">
            <Link to="/mentions-legales" className="text-outline-variant hover:text-primary-fixed transition-colors">
              Mentions Légales
            </Link>
            <span className="text-outline-variant">/</span>
            <Link to="/confidentialite" className="text-outline-variant hover:text-primary-fixed transition-colors">
              Confidentialité
            </Link>
            <span className="text-outline-variant">/</span>
            <Link to="/termes-conditions" className="text-outline-variant hover:text-primary-fixed transition-colors">
              Termes & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};