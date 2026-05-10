import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export const AboutPage = () => {
  const navigate = useNavigate();

  const coreValues = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'Qualité irréprochable dans chaque service et investissement'
    },
    {
      icon: '🔒',
      title: 'Transparence',
      description: 'Communication claire et honnête avec tous nos partenaires'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Solutions modernes et technology-driven'
    },
    {
      icon: '💼',
      title: 'Professionnalisme',
      description: 'Équipe expérimentée et certifiée'
    }
  ];

  const timeline = [
    { year: '2018', event: 'Fondation de Taoman Groupe' },
    { year: '2020', event: 'Lancement du programme d\'investissement' },
    { year: '2022', event: '500K+ FCFA investis' },
    { year: '2024', event: 'Expansion régionale' }
  ];

  const team = [
    {
      name: 'Kofi Mensah',
      role: 'Directeur Général',
      // 🔴 PHOTO: src/assets/team/director.jpg
    },
    {
      name: 'Ama Osei',
      role: 'Directrice Financière',
      // 🔴 PHOTO: src/assets/team/finance.jpg
    },
    {
      name: 'Benjamin Tano',
      role: 'Chef Opérations',
      // 🔴 PHOTO: src/assets/team/operations.jpg
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header activeLink="about" />

      <main className="flex-grow pt-20">
        {/* ============ HERO ============ */}
        <section className="bg-gradient-to-r from-primary to-primary-container py-20 px-6 text-on-primary">
          <div className="max-w-[1400px] mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              À propos de Taoman Groupe
            </h1>
            <p className="text-xl text-on-primary/90 max-w-3xl mx-auto animate-fade-in">
              Depuis 2018, nous transformons les vies grâce à des services de qualité et des investissements sécurisés.
            </p>
          </div>
        </section>

        {/* ============ MISSION & VISION ============ */}
        <section className="py-20 px-6">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group animate-fade-in-up">
              <div className="text-6xl mb-4">🎯</div>
              <h2 className="text-4xl font-bold text-on-surface mb-6">Notre Mission</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Offrir des services professionnels de qualité supérieure et créer des opportunités d'investissement transparentes qui transforment les vies de nos clients.
              </p>
            </div>

            <div className="group animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <div className="text-6xl mb-4">🚀</div>
              <h2 className="text-4xl font-bold text-on-surface mb-6">Notre Vision</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Être le leader régional dans la gestion d'investissements et les services professionnels, reconnu pour notre intégrité et notre excellence.
              </p>
            </div>
          </div>
        </section>

        {/* ============ CORE VALUES ============ */}
        <section className="py-20 px-6 bg-surface-container-low">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-5xl font-bold text-center text-on-surface mb-16 animate-fade-in">
              Nos Valeurs Fondamentales
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-outline-variant/20 text-center group hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-on-surface mb-3">{value.title}</h3>
                  <p className="text-on-surface-variant">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ TIMELINE ============ */}
        <section className="py-20 px-6">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-5xl font-bold text-center text-on-surface mb-16 animate-fade-in">
              Notre Parcours
            </h2>

            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-8 items-center animate-fade-in-up"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="flex-shrink-0 w-32 text-right">
                    <p className="text-4xl font-bold text-primary">{item.year}</p>
                  </div>
                  <div className="flex-shrink-0 w-1 h-16 bg-primary rounded-full"></div>
                  <div className="flex-grow">
                    <p className="text-xl text-on-surface font-semibold">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ TEAM ============ */}
        <section className="py-20 px-6 bg-surface-container-low">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-5xl font-bold text-center text-on-surface mb-16 animate-fade-in">
              Notre Équipe Dirigeante
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  className="text-center group animate-fade-in-up"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  {/* 🔴 MEMBER PHOTO PLACEHOLDER */}
                  <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-primary-container/20 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <div className="w-full h-full flex items-center justify-center text-on-surface-variant">
                      <p className="text-center px-4">Photo: {member.name}</p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-on-surface mb-2">{member.name}</h3>
                  <p className="text-primary font-bold mb-4">{member.role}</p>
                  <p className="text-on-surface-variant">
                    Expert avec plus de 15 ans d'expérience dans le secteur financier.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ STATS ============ */}
        <section className="py-20 px-6 bg-gradient-to-r from-primary to-primary-container">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-on-primary">
            {[
              { number: '1000+', label: 'Clients satisfaits' },
              { number: '500M+', label: 'FCFA investis' },
              { number: '15+', label: 'Années expérience' },
              { number: '50+', label: 'Équipe membres' }
            ].map((stat, idx) => (
              <div key={idx} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <p className="text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-on-primary/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="py-20 px-6">
          <div className="max-w-[1400px] mx-auto text-center">
            <h2 className="text-4xl font-bold text-on-surface mb-6">
              Rejoignez la famille Taoman Groupe
            </h2>
            <p className="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
              Découvrez comment nous pouvons contribuer à votre succès.
            </p>
            <button
              onClick={() => navigate('/inscription')}
              className="px-10 py-4 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Commencer maintenant
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};