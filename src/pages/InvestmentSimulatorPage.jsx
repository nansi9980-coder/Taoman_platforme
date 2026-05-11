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
        <section className="bg-gradient-to-r from-primary to-primary-container py-20 px-6 text-white">
          <div className="max-w-[1200px] mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Simulateur d'Investissement</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Estimez rapidement vos revenus avec Taoman Investissement Économique.
            </p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6">Paramètres du simulateur</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-on-surface mb-2">Montant investi (FCFA)</label>
                  <input
                    type="number"
                    value={investment}
                    onChange={(e) => setInvestment(e.target.value)}
                    className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-on-surface mb-2">Durée (mois)</label>
                  <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-on-surface mb-2">Retour mensuel estimé (FCFA)</label>
                  <input
                    type="number"
                    value={monthlyReturn}
                    onChange={(e) => setMonthlyReturn(e.target.value)}
                    className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary-container/10 rounded-2xl p-8 border border-primary/20 animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6">Résultats estimés</h2>
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl shadow-md border border-outline/20">
                  <p className="text-sm text-on-surface-variant">Capital investi</p>
                  <p className="text-3xl font-bold text-on-surface">{investment.toLocaleString('fr-FR')} FCFA</p>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow-md border border-outline/20">
                  <p className="text-sm text-on-surface-variant">Profit total</p>
                  <p className="text-3xl font-bold text-on-surface">{results.profit.toLocaleString('fr-FR')} FCFA</p>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow-md border border-outline/20">
                  <p className="text-sm text-on-surface-variant">Total estimé</p>
                  <p className="text-3xl font-bold text-on-surface">{results.total.toLocaleString('fr-FR')} FCFA</p>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow-md border border-outline/20">
                  <p className="text-sm text-on-surface-variant">Retour annuel moyen</p>
                  <p className="text-3xl font-bold text-on-surface">{Math.round(results.averageAnnual).toLocaleString('fr-FR')} FCFA</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
