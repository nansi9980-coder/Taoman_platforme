import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import btpIcon from '../assets/btp_sector.jpeg';
import agroIcon from '../assets/agro_sector.jpeg';
import transportIcon from '../assets/transport_sector.jpeg';
import programmeImg from '../assets/programme.jpeg';
import simulateurImg from '../assets/simulateur.jpeg';

export const InvestmentPage = () => {
  const navigate = useNavigate();

  const sectors = [
    {
      title: 'BTP & Immobilier',
      icon: btpIcon,
      description: 'Infrastructures et projets immobiliers de haute valeur',
      details: 'Investissez dans la construction et le développement immobilier durable'
    },
    {
      title: 'Agro & Énergie',
      icon: agroIcon,
      description: 'Agriculture et énergies renouvelables',
      details: 'Participez à la révolution agricole et énergétique'
    },
    {
      title: 'Transport & Logistique',
      icon: transportIcon,
      description: 'Solutions de mobilité et logistique intégrée',
      details: 'Investissez dans les chaînes d\'approvisionnement modernes'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background pt-[80px]">
      <Header activeLink="investissement" />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-container py-xxl text-on-primary">
          <div className="max-w-[1200px] mx-auto px-lg">
            <h1 className="font-display text-display text-on-primary mb-md">
              Taoman Investissement
            </h1>
            <p className="text-body-lg text-on-primary/90 mb-xl max-w-2xl">
              Bâtissez votre indépendance financière avec des investissements transparents, sécurisés et rentables.
            </p>
            <button
              onClick={() => navigate('/inscription')}
              className="bg-on-primary text-primary px-xl py-md rounded-lg font-label-md font-bold shadow-md hover:opacity-90 transition-all"
            >
              Commencer à investir
            </button>
          </div>
        </section>

        {/* Key Stats */}
        <section className="bg-white py-xxl">
          <div className="max-w-[1200px] mx-auto px-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-xl">
              <div className="text-center p-xl bg-surface-container-low rounded-xl">
                <div className="text-4xl font-bold text-primary mb-md">500K</div>
                <p className="text-body-sm text-on-surface-variant">Investissement minimum</p>
              </div>
              <div className="text-center p-xl bg-surface-container-low rounded-xl">
                <div className="text-4xl font-bold text-primary mb-md">150K</div>
                <p className="text-body-sm text-on-surface-variant">Rendement mensuel moyen</p>
              </div>
              <div className="text-center p-xl bg-surface-container-low rounded-xl">
                <div className="text-4xl font-bold text-primary mb-md">10</div>
                <p className="text-body-sm text-on-surface-variant">Mois avant premier retrait</p>
              </div>
              <div className="text-center p-xl bg-surface-container-low rounded-xl">
                <div className="text-4xl font-bold text-primary mb-md">2M+</div>
                <p className="text-body-sm text-on-surface-variant">Retours totaux moyens</p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Programs */}
        <section className="bg-surface-container-low py-xxl">
          <div className="max-w-[1200px] mx-auto px-lg">
            <h2 className="text-headline-lg text-on-surface font-bold mb-xl text-center">
              Nos Programmes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
              {/* Card 1: Taoman TIE */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-[#0047AB] to-[#002366] p-10 rounded-[2.5rem] shadow-2xl hover:shadow-[0_20px_50px_rgba(0,71,171,0.3)] transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-white/10 transition-colors"></div>
                
                <div className="flex items-start justify-between mb-8">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-inner group-hover:scale-110 transition-transform duration-500">
                    <img src={programmeImg} alt="TIE Logo" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full border border-white/10">
                    <span className="text-xs font-bold text-white tracking-widest uppercase">Premium</span>
                  </div>
                </div>

                <h3 className="text-4xl text-white font-bold mb-4 tracking-tight">
                  Taoman TIE
                </h3>
                <p className="text-lg text-white/80 mb-10 leading-relaxed font-light">
                  Programme d'investissement exclusif avec retours mensuels garantis et diversification sectorielle stratégique.
                </p>
                
                <button
                  onClick={() => navigate('/investissement/tie')}
                  className="group/btn relative w-full overflow-hidden bg-white text-[#0047AB] py-5 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 hover:shadow-white/20 active:scale-95"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Découvrir le TIE 
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </span>
                </button>
              </div>

              {/* Card 2: Simulateur */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#333333] p-10 rounded-[2.5rem] shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up" style={{animationDelay: '150ms'}}>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16 blur-2xl group-hover:bg-white/10 transition-colors"></div>

                <div className="flex items-start justify-between mb-8">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-inner group-hover:scale-110 transition-transform duration-500">
                    <img src={simulateurImg} alt="Simulateur Logo" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full border border-white/10">
                    <span className="text-xs font-bold text-white tracking-widest uppercase">Outil</span>
                  </div>
                </div>

                <h3 className="text-4xl text-white font-bold mb-4 tracking-tight">
                  Simulateur
                </h3>
                <p className="text-lg text-white/80 mb-10 leading-relaxed font-light">
                  Estimez vos revenus potentiels en temps réel et planifiez votre stratégie d'investissement avec précision.
                </p>
                
                <button
                  onClick={() => navigate('/investissement/simulateur')}
                  className="group/btn relative w-full overflow-hidden bg-white text-[#1A1A1A] py-5 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 hover:shadow-white/20 active:scale-95"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Utiliser le simulateur
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </span>
                </button>
              </div>
            </div>

            <h2 className="text-headline-lg text-on-surface font-bold mb-xl text-center mt-2xl">
              Secteurs d'Investissement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
              {sectors.map((sector, idx) => (
                <div key={idx} className="bg-white p-xl rounded-xl shadow-md hover:shadow-lg transition-all animate-fade-in-up" style={{animationDelay: `${idx * 100}ms`}}>
                  <img src={sector.icon} alt={sector.title} className="w-20 h-20 object-contain mb-md bg-surface-container-low rounded-lg p-2" />
                  <h3 className="text-headline-md text-on-surface font-bold mb-md">
                    {sector.title}
                  </h3>
                  <p className="text-body-md text-on-surface-variant mb-md">
                    {sector.description}
                  </p>
                  <p className="text-body-sm text-on-surface mb-lg">
                    {sector.details}
                  </p>
                  <button
                    onClick={() => navigate('/inscription')}
                    className="w-full bg-primary text-on-primary py-md rounded-lg font-label-md font-bold hover:opacity-90 transition-all"
                  >
                    Investir
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-xxl max-w-[1200px] mx-auto px-lg">
          <h2 className="text-headline-lg text-on-surface font-bold mb-xl text-center">
            Comment ça marche?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-xl">
            {[
              { num: '1', title: 'Inscription', desc: 'Créez votre compte en quelques minutes' },
              { num: '2', title: 'Vérification', desc: 'Complétez votre KYC (vérification d\'identité)' },
              { num: '3', title: 'Investissement', desc: 'Choisissez vos secteurs et montants' },
              { num: '4', title: 'Retours', desc: 'Recevez vos dividendes chaque mois' }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-primary text-on-primary w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-md">
                  {step.num}
                </div>
                <h3 className="text-headline-md text-on-surface font-bold mb-md">
                  {step.title}
                </h3>
                <p className="text-body-md text-on-surface-variant">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="bg-on-background py-xxl">
          <div className="max-w-[1200px] mx-auto px-lg">
            <h2 className="text-headline-lg text-surface font-bold mb-xl text-center">
              Avantages de Taoman Investissement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
              {[
                { title: '🔒 Sécurité', desc: 'Vos données et fonds sont chiffrés et sécurisés' },
                { title: '📊 Transparence', desc: 'Suivi en temps réel de vos investissements' },
                { title: '💰 Rendement', desc: 'Retours mensuels garantis et attractifs' },
                { title: '🌍 Diversification', desc: 'Investissez dans plusieurs secteurs' },
                { title: '📱 Accessible', desc: 'Plateforme web et mobile optimisée' },
                { title: '🤝 Support', desc: 'Équipe support réactive 24/7' }
              ].map((feature, idx) => (
                <div key={idx} className="bg-surface-variant/10 p-xl rounded-xl border border-surface-variant/20">
                  <h3 className="text-headline-md text-on-primary font-bold mb-md">
                    {feature.title}
                  </h3>
                  <p className="text-body-md text-outline-variant">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-xxl max-w-[1200px] mx-auto px-lg">
          <h2 className="text-headline-lg text-on-surface font-bold mb-xl text-center">
            Questions Fréquemment Posées
          </h2>
          <div className="max-w-2xl mx-auto space-y-md">
            {[
              { q: 'Quel est le montant minimum d\'investissement?', a: 'Le montant minimum est de 500 000 FCFA.' },
              { q: 'Quand je reçois mes premiers retours?', a: 'Les premiers retours arrivent généralement après 10 mois.' },
              { q: 'Est-ce que mes données sont sécurisées?', a: 'Oui, nous utilisons le chiffrement AES-256 et nous sommes conformes au RGPD.' },
              { q: 'Puis-je retirer mon argent?', a: 'Vous pouvez retirer vos gains à tout moment après la période de rétention.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-surface-container-low p-xl rounded-xl">
                <h3 className="text-headline-md text-on-surface font-bold mb-md">
                  {item.q}
                </h3>
                <p className="text-body-md text-on-surface-variant">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-xxl">
          <div className="max-w-[1200px] mx-auto px-lg text-center">
            <h2 className="text-headline-lg text-on-primary font-bold mb-md">
              Prêt à commencer?
            </h2>
            <p className="text-body-lg text-on-primary/90 mb-xl">
              Rejoignez des milliers d'investisseurs qui font confiance à Taoman Groupe.
            </p>
            <button
              onClick={() => navigate('/inscription')}
              className="bg-on-primary text-primary px-xl py-md rounded-lg font-label-md font-bold hover:opacity-90 transition-all"
            >
              S'inscrire maintenant
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};