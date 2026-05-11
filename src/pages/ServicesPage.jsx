import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ServiceCard } from '../components/ServiceCard';
import { useNavigate } from 'react-router-dom';

const Icons = {
  car: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm11 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
    </svg>
  ),
  truck: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 18.5a1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5m1.5-9l1.96 2.5H17V9.5m-11 9a1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5M3 6h12v6H3zm-2 10h2a3 3 0 013 3v2h1v-2a2 2 0 00-2-2H1m0-4h16V5H3v7z"/>
    </svg>
  ),
  building: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
    </svg>
  ),
  ac: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
    </svg>
  )
};

export const ServicesPage = () => {
  const navigate = useNavigate();

  const serviceDetails = [
    {
      icon: Icons.car,
      title: "Lavage entretien automobile & moto",
      description: "Nettoyage complet de la carrosserie, des vitres, des roues, des pneus et de l'intérieur"
    },
    {
      icon: Icons.truck,
      title: "Déménagement & Aménagement",
      description: "Notre équipe de professionnels du déménagement assure le transport sûr et efficace de vos biens vers le nouveau lieu..."
    },
    {
      icon: Icons.building,
      title: "Entretien des bureaux",
      description: "Services complets d'entretien et de nettoyage pour vos espaces de bureaux. Maintien d'un environnement professionnel propre et sain."
    },
    {
      icon: Icons.ac,
      title: "Entretien de climatisation",
      description: "Installation, maintenance et réparation de systèmes de climatisation. Garantissons votre confort thermique toute l'année."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background pt-[80px]">
      <Header activeLink="services" />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary py-xxl text-on-primary">
          <div className="max-w-[1200px] mx-auto px-lg text-center">
            <h1 className="font-display text-display text-on-primary mb-md">
              Solutions d'Entretien Professionnel
            </h1>
            <p className="text-body-lg text-on-primary/90 mb-xl max-w-3xl mx-auto">
              Taoman Groupe vous offre des services d'entretien méticuleux, alliant rigueur institutionnelle et expertise technique pour préserver vos actifs et votre environnement.
            </p>
            <button
              onClick={() => navigate('/devis')}
              className="bg-on-primary text-primary px-xl py-md rounded-lg font-label-md font-bold shadow-md hover:opacity-90 transition-all"
            >
              Demander un devis
            </button>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-xxl max-w-[1400px] mx-auto px-lg w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Icons.car, title: "Lavage automobile & moto", description: "Nettoyage complet de la carrosserie, vitres, roues et intérieur", href: '/lavage-auto/devis' },
              { icon: Icons.truck, title: "Déménagement & Aménagement", description: "Transport sûr et efficace de vos biens vers votre nouveau lieu", href: '/demenagement/devis' },
              { icon: Icons.building, title: "Entretien des bureaux", description: "Services complets d'entretien pour vos espaces de travail", href: '/entretien/bureaux' },
              { icon: Icons.ac, title: "Entretien climatisation", description: "Installation, maintenance et réparation de climatiseurs", href: '/entretien/climatisation' }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group h-full flex flex-col animate-fade-in-up" style={{animationDelay: `${index * 50}ms`}}>
                <div className="p-6 flex flex-col h-full">
                  <div className="text-primary text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-lg font-bold text-on-surface mb-2">{service.title}</h3>
                  <p className="text-sm text-on-surface-variant mb-6 flex-grow">{service.description}</p>
                  <button
                    onClick={() => navigate(service.href)}
                    className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-2.5 rounded-lg font-bold text-sm hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    Demander un devis →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Portfolio */}
        <section className="bg-surface-container-low py-xxl">
          <div className="max-w-[1200px] mx-auto px-lg">
            <h2 className="text-headline-lg text-on-surface font-bold mb-xl">
              Nos Réalisations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
              {[
                { title: 'Lavage Intérieur et Extérieur', desc: 'Donnez à votre voiture l\'amour qu\'elle mérite avec nos services de lavage de voiture de qualité supérieure.' },
                { title: 'Véhicules pour vos déménagements', desc: 'Le déménagement ne doit pas être une corvée. Confiez-nous votre déménagement et profitez d\'une expérience sans stress.' },
                { title: 'Entretien bureaux', desc: 'Services complets pour vos espaces de travail.' },
                { title: 'Climatisation', desc: 'Installation et maintenance de systèmes de climatisation performants.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-xl rounded-xl shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-headline-md text-on-surface font-bold mb-md">
                    {item.title}
                  </h3>
                  <p className="text-body-md text-on-surface-variant mb-md">
                    {item.desc}
                  </p>
                  <button
                    onClick={() => navigate('/devis')}
                    className="text-primary font-bold text-body-md hover:underline"
                  >
                    En savoir plus →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-xxl max-w-[1200px] mx-auto px-lg">
          <h2 className="text-headline-lg text-on-surface font-bold mb-xl text-center">
            Pourquoi nous choisir?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
            {[
              { num: '24/7', title: 'Disponibilité', desc: 'Service disponible jour et nuit, 7 jours sur 7' },
              { num: '100%', title: 'Professionnel', desc: 'Équipe certifiée et expérimentée' },
              { num: '1000+', title: 'Clients', desc: 'Plus de 1000 clients satisfaits' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold text-primary mb-md">{item.num}</div>
                <h3 className="text-headline-md text-on-surface font-bold mb-md">
                  {item.title}
                </h3>
                <p className="text-body-md text-on-surface-variant">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-xxl">
          <div className="max-w-[1200px] mx-auto px-lg text-center">
            <h2 className="text-headline-lg text-on-primary font-bold mb-md">
              Prêt à transformer vos espaces?
            </h2>
            <p className="text-body-lg text-on-primary/90 mb-xl">
              Contactez-nous dès aujourd'hui pour un devis gratuit et sans engagement.
            </p>
            <button
              onClick={() => navigate('/devis')}
              className="bg-on-primary text-primary px-xl py-md rounded-lg font-label-md font-bold hover:opacity-90 transition-all"
            >
              Demander un devis
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};