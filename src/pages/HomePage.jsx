import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ServiceCard } from '../components/ServiceCard';

import lavage1    from '../assets/realisations/lavage1.jpg';
import lavage2    from '../assets/realisations/lavage2.jpg';
import mecanique1 from '../assets/realisations/mecanique1.png';
import mecanique2 from '../assets/realisations/mecanique2.jpg';
import transport1 from '../assets/realisations/transport1.jpg';
import transport2 from '../assets/realisations/transport2.jpg';
import { API_URL } from "../config";
import btpIcon from '../assets/btp_sector.jpeg';
import agroIcon from '../assets/agro_sector.jpeg';
import transportIcon from '../assets/transport_sector.jpeg';

export const HomePage = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [lightbox, setLightbox] = useState(null);

  const [apiServices, setApiServices] = useState([]);
  const [apiRealisations, setApiRealisations] = useState([]);
  const [apiSiteContent, setApiSiteContent] = useState({});

  useEffect(() => {
    setIsLoaded(true);

    // Fetch Services
    fetch(`${API_URL}/content/services`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setApiServices(data.filter(s => s.published).map(s => ({
            icon: s.icon || 'star', // fallback icon if it was not provided correctly
            title: s.title,
            description: s.description,
            price: s.actionText || 'En savoir plus',
            features: s.actionLink ? [s.actionLink] : []
          })));
        }
      })
      .catch(err => console.error("Error fetching services:", err));

    // Fetch Realisations
    fetch(`${API_URL}/media`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          const images = data.filter(m => m.type && m.type.startsWith('image/')).map(m => ({
            src: `${API_URL}${Math.random() /*hack to avoid replacing wrongly? No, just API_URL */}`,
            alt: m.name,
            category: m.category,
            label: m.name.split('.')[0]
          }));
          if (images.length > 0) {
            setApiRealisations(images);
          }
        }
      })
      .catch(err => console.error("Error fetching media:", err));

    // Fetch Site Content
    fetch(`${API_URL}/content/texts`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const contentMap = data.reduce((acc, item) => {
            try {
              acc[item.section] = JSON.parse(item.content);
            } catch (e) {
              acc[item.section] = item.content;
            }
            return acc;
          }, {});
          setApiSiteContent(contentMap);
        }
      })
      .catch(err => console.error("Error fetching site content:", err));
  }, []);

  const services = apiServices.length > 0 ? apiServices : [
    {
      icon: '🚗',
      title: 'Lavage & Entretien Auto',
      description: 'Service de nettoyage complet et professionnel pour votre véhicule',
      price: '15,000 FCFA',
      features: ['Intérieur et extérieur', 'Produits premium', 'Rapide et efficace']
    },
    {
      icon: '🚚',
      title: 'Déménagement & Aménagement',
      description: 'Équipe professionnelle pour un déménagement sans stress',
      price: '500,000 FCFA',
      features: ['Manutention sécurisée', 'Assurance comprise', 'Ponctualité garantie']
    },
    {
      icon: '🏢',
      title: 'Entretien des Bureaux',
      description: 'Nettoyage quotidien et maintenance de vos espaces de travail',
      price: '20,000 FCFA/mois',
      features: ['Service quotidien', 'Produits écologiques', 'Équipe discrète']
    },
    {
      icon: '❄️',
      title: 'Climatisation & Maintenance',
      description: 'Installation, réparation et maintenance de systèmes climatiques',
      price: 'Devis personnalisé',
      features: ['Intervention rapide', 'Expertise technique', 'Garantie 12 mois']
    }
  ];

  const investmentStats = apiSiteContent.investmentStats || [
    { label: 'FCFA Investis',      value: '500K+',     icon: '💰' },
    { label: 'Rendement Moyen',    value: '150K/mois',  icon: '📈' },
    { label: 'Délai Retour',       value: '10 mois',    icon: '⏱️' },
    { label: 'Retour Total Moyen', value: '2M FCFA',    icon: '🎯' },
  ];

  const sectors = apiSiteContent.sectors || [
    { title: 'BTP & Immobilier',       icon: btpIcon, description: 'Projets de construction durable' },
    { title: 'Agro & Énergie',         icon: agroIcon, description: 'Agriculture moderne et énergies renouvelables' },
    { title: 'Transport & Logistique', icon: transportIcon, description: 'Solutions logistiques intégrées' },
  ];

  const testimonials = apiSiteContent.testimonials || [
    {
      name: 'Jean Tchakondo',
      role: 'Investisseur Privé',
      comment: "Taoman Groupe offre une transparence exceptionnelle. J'ai augmenté mes revenus mensuels de manière constante.",
    },
    {
      name: 'Marie Sefako',
      role: 'PDG - Groupe Import',
      comment: "Service d'entretien impeccable et équipe professionnelle. Je recommande vivement Taoman Groupe!",
    }
  ];

  const heroData = apiSiteContent.heroBanner || {
    title: "Excellence",
    subtitle: "dans chaque service",
    description: "Taoman Groupe offre des services professionnels de qualité supérieure et des opportunités d'investissement transparentes pour votre réussite financière.",
    btn1: "Commencer à investir",
    btn2: "Voir nos services",
    imageCaption: "Nos équipes en action"
  };

  // ── Réalisations ──────────────────────────────────────────────────────────
  const realisations = apiRealisations.length > 0 ? apiRealisations : [
    { src: lavage1,    alt: 'Centre de lavage auto – file de véhicules',       category: 'Lavage Auto',  label: 'Centre de Lavage Auto' },
    { src: lavage2,    alt: 'Parking du centre de lavage Taoman',              category: 'Lavage Auto',  label: 'Parking Lavage Auto' },
    { src: mecanique1, alt: "Équipe Taoman devant le camion de transport",     category: 'Transport',    label: 'Équipe Transport' },
    { src: mecanique2, alt: 'Techniciens Taoman en intervention mécanique',    category: 'Mécanique',    label: 'Atelier Mécanique' },
    { src: transport1, alt: 'Camion Mazda Taoman – service de déménagement',   category: 'Transport',    label: 'Camion de Transport' },
    { src: transport2, alt: 'Camion déménagement national & international',    category: 'Transport',    label: 'Déménagement National' },
  ];

  // Extract unique filters from the current realisations list, including 'Tous'
  const filters = ['Tous', ...new Set(realisations.map(r => r.category))];
  
  const filtered = activeFilter === 'Tous'
    ? realisations
    : realisations.filter(r => r.category === activeFilter);

  return (
    <div className={`flex flex-col min-h-screen bg-surface transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header activeLink="accueil" />

      <main className="flex-grow pt-20">

        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl animate-blob-delay"></div>
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold text-on-surface mb-6 leading-tight">
                <span className="text-primary">{heroData.title}</span> {heroData.subtitle}
              </h1>
              <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                {heroData.description}
              </p>
              <div className="flex gap-4 flex-col sm:flex-row">
                <button
                  onClick={() => navigate('/investissement')}
                  className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  {heroData.btn1}
                </button>
                <button
                  onClick={() => navigate('/services')}
                  className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
                >
                  {heroData.btn2}
                </button>
              </div>
            </div>

            {/* Hero image : première photo transport */}
            <div className="relative animate-fade-in-down">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src={transport2}
                  alt="Taoman Groupe – service professionnel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-primary font-bold text-sm">{heroData.imageCaption}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ STATS INVESTISSEMENT ============ */}
        <section className="py-20 px-6 bg-gradient-to-r from-primary via-primary-container to-primary">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-4xl font-bold text-center text-on-primary mb-12">
              Investissement Transparent
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {investmentStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="group bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center border border-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:bg-white/20 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SERVICES ============ */}
        <section className="py-20 px-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-bold text-on-surface mb-6">Nos Services Professionnels</h2>
              <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
                Découvrez notre offre complète de services de haute qualité conçus pour répondre à tous vos besoins.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, idx) => (
                <ServiceCard
                  key={idx}
                  {...service}
                  delay={idx * 100}
                  onRequestQuote={() => navigate('/services')}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ============ ACCÈS RAPIDE ============ */}
        <section className="py-16 px-6 bg-surface-container-low">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <p className="text-sm uppercase tracking-[0.35em] text-primary mb-3">Accès rapide</p>
              <h2 className="text-4xl font-bold text-on-surface">Toutes les nouvelles pages en un clic</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: 'Contact', href: '/contact' },
                { label: 'Lavage Auto', href: '/lavage-auto/devis' },
                { label: 'Déménagement', href: '/demenagement/devis' },
                { label: 'Entretien bureaux', href: '/entretien/bureaux' },
                { label: 'Climatisation', href: '/entretien/climatisation' },
                { label: 'Personnel déménagement', href: '/demenagement/personnels' },
                { label: 'Investissement TIE', href: '/investissement/tie' },
                { label: 'Simulateur', href: '/investissement/simulateur' },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="group rounded-3xl border border-outline-variant bg-white p-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <p className="text-lg font-semibold text-on-surface mb-2">{item.label}</p>
                  <span className="text-sm text-on-surface-variant group-hover:text-primary transition-colors">Ouvrir la page →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============ RÉALISATIONS ============ */}
        <section className="py-20 px-6 bg-surface-container-low">
          <div className="max-w-[1400px] mx-auto">

            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-5xl font-bold text-on-surface mb-4">Nos Réalisations</h2>
              <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
                Découvrez en images le travail quotidien de nos équipes sur le terrain.
              </p>
            </div>

            {/* Filtres */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                    activeFilter === f
                      ? 'bg-primary text-white shadow-lg scale-105'
                      : 'bg-white text-on-surface border border-outline-variant hover:border-primary hover:text-primary'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Grille photos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightbox(item)}
                  className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl cursor-pointer transition-all duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-2 w-fit">
                      {item.category}
                    </span>
                    <p className="text-white font-bold text-lg">{item.label}</p>
                    <p className="text-white/70 text-sm mt-1">Cliquer pour agrandir</p>
                  </div>
                  {/* Badge catégorie toujours visible */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Lightbox ── */}
        {lightbox && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-primary transition-colors"
              >
                ✕
              </button>
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              <p className="text-white text-center mt-4 font-semibold">{lightbox.label}</p>
            </div>
          </div>
        )}

        {/* ============ SECTEURS D'INVESTISSEMENT ============ */}
        <section className="py-20 px-6">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-5xl font-bold text-center text-on-surface mb-16 animate-fade-in">
              Secteurs d'Investissement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sectors.map((sector, idx) => (
                <Link
                  key={idx}
                  to="/investissement"
                  className="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary-container/40"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/80 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                    <img src={sector.icon} alt={sector.title} className="w-16 h-16 object-contain mb-3 bg-white/10 rounded-lg p-1" />
                    <h3 className="text-2xl font-bold mb-2">{sector.title}</h3>
                    <p className="text-white/90">{sector.description}</p>
                    <p className="text-primary-fixed mt-2 font-bold">En savoir plus →</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============ TÉMOIGNAGES ============ */}
        <section className="py-20 px-6 bg-surface-container-low">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-5xl font-bold text-center text-on-surface mb-16 animate-fade-in">
              Ce que disent nos clients
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-outline-variant/20 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-container rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">{t.name}</p>
                      <p className="text-sm text-on-surface-variant">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-on-surface-variant italic text-lg">"{t.comment}"</p>
                  <div className="text-yellow-400 mt-4">★★★★★</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="py-20 px-6 bg-gradient-to-r from-primary via-primary-container to-primary">
          <div className="max-w-[1400px] mx-auto text-center animate-fade-in">
            <h2 className="text-5xl font-bold text-on-primary mb-6">Prêt à transformer votre avenir?</h2>
            <p className="text-xl text-on-primary/90 mb-10 max-w-2xl mx-auto">
              Rejoignez des milliers de clients satisfaits et commencez votre parcours vers la liberté financière.
            </p>
            <div className="flex gap-4 flex-col sm:flex-row justify-center">
              {!localStorage.getItem('user') && (
                <button
                  onClick={() => navigate('/inscription')}
                  className="px-10 py-4 bg-white text-primary font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  S'inscrire gratuitement
                </button>
              )}
              <button
                onClick={() => navigate('/contact')}
                className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Nous contacter
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};