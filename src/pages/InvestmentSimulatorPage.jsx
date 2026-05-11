import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const InvestmentSimulatorPage = () => {
  const [investment, setInvestment] = useState('500000');
  const [duration, setDuration] = useState('10');
  const [monthlyReturn, setMonthlyReturn] = useState('150000');

  const computeResults = () => {
    const capital = Number(investment);
    const months = Number(duration);
    const monthly = Number(monthlyReturn);
    return {
      total: capital + monthly * months,
      profit: monthly * months,
      averageAnnual: ((monthly * months) / months) * 12
    };
  };

  const results = computeResults();

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header activeLink="investissement" />

      <main className="flex-grow pt-20">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden bg-gradient-to-r from-primary via-primary-container to-primary py-20 px-6 text-white">
          <div className="absolute -left-24 top-10 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute right-0 top-16 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="max-w-[1400px] mx-auto text-center animate-fade-in-up relative z-10">
            <p className="text-sm uppercase tracking-[0.4em] text-white/70 mb-4">Outil d'estimation</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Simulateur d'Investissement</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Estimez vos revenus en temps réel et planifiez votre stratégie d'investissement avec précision.
            </p>
          </div>
        </section>

        {/* ============ CALCULATOR ============ */}
        <section className="py-20 px-6">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Input Form */}
            <div className="bg-white rounded-3xl shadow-xl p-10 animate-fade-in-up border border-outline-variant/20">
              <h2 className="text-3xl font-bold mb-8 text-on-surface">Paramètres d'investissement</h2>
              
              <div className="space-y-8">
                <div className="space-y-3 animate-fade-in-up" style={{animationDelay: '100ms'}}>
                  <label className="block text-sm font-bold text-on-surface uppercase tracking-[0.2em]">Montant à investir (FCFA)</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={investment}
                      onChange={(e) => setInvestment(e.target.value)}
                      className="w-full px-6 py-4 border-2 border-outline-variant rounded-2xl focus:border-primary focus:outline-none transition-colors bg-surface text-on-surface font-bold text-lg"
                      placeholder="500000"
                    />
                    <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-on-surface-variant font-bold">FCFA</span>
                  </div>
                  <p className="text-xs text-on-surface-variant">Minimum recommandé: 500,000 FCFA</p>
                </div>

                <div className="space-y-3 animate-fade-in-up" style={{animationDelay: '150ms'}}>
                  <label className="block text-sm font-bold text-on-surface uppercase tracking-[0.2em]">Durée (mois)</label>
                  <div className="flex gap-3 items-center">
                    <input
                      type="range"
                      min="1"
                      max="60"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="flex-1 h-2 bg-primary rounded-full cursor-pointer accent-primary"
                    />
                    <span className="text-2xl font-bold text-primary bg-primary/10 px-4 py-2 rounded-lg w-16 text-center">{duration}</span>
                  </div>
                </div>

                <div className="space-y-3 animate-fade-in-up" style={{animationDelay: '200ms'}}>
                  <label className="block text-sm font-bold text-on-surface uppercase tracking-[0.2em]">Retour mensuel (FCFA)</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={monthlyReturn}
                      onChange={(e) => setMonthlyReturn(e.target.value)}
                      className="w-full px-6 py-4 border-2 border-outline-variant rounded-2xl focus:border-primary focus:outline-none transition-colors bg-surface text-on-surface font-bold text-lg"
                      placeholder="150000"
                    />
                    <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-on-surface-variant font-bold">/mois</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary to-primary-container rounded-3xl shadow-xl p-10 animate-fade-in-up" style={{animationDelay: '100ms'}}>
                <p className="text-white/70 text-sm uppercase tracking-[0.2em] mb-2">Capital investi</p>
                <p className="text-5xl font-bold text-white">{Number(investment).toLocaleString('fr-FR')}</p>
                <p className="text-white/70 mt-2">FCFA</p>
              </div>

              <div className="bg-gradient-to-br from-secondary to-secondary-container rounded-3xl shadow-xl p-10 animate-fade-in-up" style={{animationDelay: '150ms'}}>
                <p className="text-white/70 text-sm uppercase tracking-[0.2em] mb-2">Profit total</p>
                <p className="text-5xl font-bold text-white">{results.profit.toLocaleString('fr-FR')}</p>
                <p className="text-white/70 mt-2">FCFA sur {duration} mois</p>
              </div>

              <div className="bg-gradient-to-br from-tertiary to-tertiary-container rounded-3xl shadow-xl p-10 animate-fade-in-up" style={{animationDelay: '200ms'}}>
                <p className="text-white/70 text-sm uppercase tracking-[0.2em] mb-2">Total estimé</p>
                <p className="text-5xl font-bold text-white">{results.total.toLocaleString('fr-FR')}</p>
                <p className="text-white/70 mt-2">FCFA à la fin de la période</p>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-10 border-2 border-primary/20 animate-fade-in-up" style={{animationDelay: '250ms'}}>
                <p className="text-on-surface-variant text-sm uppercase tracking-[0.2em] mb-2">Retour annuel moyen</p>
                <p className="text-4xl font-bold text-primary">{Math.round(results.averageAnnual).toLocaleString('fr-FR')}</p>
                <p className="text-on-surface-variant mt-2">FCFA/an</p>
              </div>

              <button
                onClick={() => window.location.href = '/inscription'}
                className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 animate-fade-in-up"
                style={{animationDelay: '300ms'}}
              >
                Commencer à investir maintenant
              </button>
            </div>
          </div>
        </section>

        {/* ============ FEATURES ============ */}
        <section className="bg-surface-container-low py-16 px-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: '🔒', title: 'Sécurisé', desc: 'Vos données sont protégées et chiffrées' },
                { icon: '📈', title: 'Transparent', desc: 'Suivi en temps réel de vos investissements' },
                { icon: '⚡', title: 'Rapide', desc: 'Investissez en moins de 5 minutes' }
              ].map((item, idx) => (
                <div key={idx} className="text-center animate-fade-in-up" style={{animationDelay: `${idx * 100}ms`}}>
                  <p className="text-5xl mb-4">{item.icon}</p>
                  <h3 className="text-xl font-bold text-on-surface mb-2">{item.title}</h3>
                  <p className="text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
