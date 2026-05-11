import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { API_URL } from '../config';

export const PasswordResetPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
        setTimeout(() => navigate('/connexion'), 3000);
      } else {
        setError('Email non trouvé ou erreur serveur');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setError('Erreur lors de la requête. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-primary-container/10 flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8 animate-fade-in-up">
          {/* Logo Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-on-surface mb-2">Récupération</h1>
            <p className="text-on-surface-variant">Réinitialiser votre mot de passe</p>
          </div>

          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-500 rounded-lg text-green-700 text-center animate-fade-in-up">
              ✓ Vérifiez votre email pour les instructions de réinitialisation
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-500 rounded-lg text-red-700 text-center animate-fade-in-up">
              ✗ {error}
            </div>
          )}

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
              <div>
                <label className="block text-sm font-bold text-on-surface mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  required
                  className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-primary to-primary-container text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50"
              >
                {loading ? 'Envoi en cours...' : 'Envoyer'}
              </button>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <p className="text-on-surface-variant">
                Un email de réinitialisation a été envoyé à <strong>{email}</strong>
              </p>
              <p className="text-sm text-on-surface-variant">
                Vous allez être redirigé vers la page de connexion...
              </p>
            </div>
          )}

          <div className="mt-8 text-center">
            <p className="text-on-surface-variant">
              Vous avez un compte?{' '}
              <Link to="/connexion" className="text-primary font-bold hover:underline">
                Se connecter
              </Link>
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center text-on-surface-variant text-sm">
          <p>N'avez pas reçu l'email? Vérifiez votre dossier spam ou</p>
          <p>
            <Link to="/contact" className="text-primary font-bold hover:underline">
              Contactez-nous
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
