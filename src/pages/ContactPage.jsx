import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { API_URL } from "../config";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    try {
      const response = await fetch(`${API_URL}/quotes/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          title: formData.subject,
          description: formData.message,
          service: 'Contact',
        }),
      });

      if (response.ok) {
        console.log('Devis envoyé avec succès');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        console.error('Erreur lors de l\'envoi du devis');
      }
    } catch (error) {
      console.error('Erreur réseau:', error);
    } finally {
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header activeLink="contact" />

      <main className="flex-grow pt-20">
        {/* ============ HERO ============ */}
        <section className="bg-gradient-to-r from-primary to-primary-container py-16 px-6 text-on-primary">
          <div className="max-w-[1400px] mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-xl text-on-primary/90">Nous sommes disponibles 24h/24, 7j/7</p>
          </div>
        </section>

        {/* ============ CONTACT INFO ============ */}
        <section className="py-16 px-6">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: '📞', title: 'Téléphone', value: '+228 90 42 13 77' },
              { icon: '✉️', title: 'Email', value: 'taomancontact@gmail.com' },
              { icon: '📍', title: 'Localisation', value: 'Vakpossito, Lomé - Togo' }
            ].map((info, idx) => (
              <div
                key={idx}
                className="bg-surface-container-high p-8 rounded-2xl text-center shadow-md hover:shadow-lg transition-all duration-300 border border-outline-variant/20 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-5xl mb-4">{info.icon}</div>
                <h3 className="text-2xl font-bold text-on-surface mb-2">{info.title}</h3>
                <p className="text-on-surface-variant text-lg">{info.value}</p>
              </div>
            ))}
          </div>

          {/* ============ FORM ============ */}
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl shadow-lg border border-outline-variant/20">
              <h2 className="text-3xl font-bold text-on-surface mb-8">Nous envoyer un message</h2>

              <div className="space-y-6">
                {/* Name */}
                <div className="animate-fade-in-up">
                  <label htmlFor="name" className="block text-on-surface font-bold mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-outline-variant rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                {/* Email */}
                <div className="animate-fade-in-up" style={{ animationDelay: '50ms' }}>
                  <label htmlFor="email" className="block text-on-surface font-bold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-outline-variant rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                {/* Phone */}
                <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                  <label htmlFor="phone" className="block text-on-surface font-bold mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-outline-variant rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="+228 XX XX XX XX"
                  />
                </div>

                {/* Subject */}
                <div className="animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                  <label htmlFor="subject" className="block text-on-surface font-bold mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-outline-variant rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Objet de votre message"
                  />
                </div>

                {/* Message */}
                <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <label htmlFor="message" className="block text-on-surface font-bold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-outline-variant rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Envoyer le message
                </button>

                {/* Success Message */}
                {submitted && (
                  <div className="p-4 bg-green-100 text-green-700 rounded-lg text-center font-bold animate-fade-in">
                    ✓ Message envoyé avec succès! Nous vous répondrons sous peu.
                  </div>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// ============ QUOTE PAGE ============

export const QuotePage = () => {
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    email: '',
    phone: '',
    date: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setFormData(prev => ({
          ...prev,
          name: [user.firstName, user.lastName].filter(Boolean).join(' ') || prev.name,
          email: user.email || prev.email,
          phone: user.phone || prev.phone
        }));
      } catch(e) {
        console.error("Erreur de parsing user data", e);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${API_URL}/quotes/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          title: `Devis: ${formData.service}`,
          description: `Date souhaitée: ${formData.date}\n\nDescription: ${formData.description}`,
          service: formData.service,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Erreur lors de l\'envoi du devis');
      }
    } catch (error) {
      console.error('Erreur réseau:', error);
    }
  };

  const services = [
    'Lavage Auto',
    'Déménagement',
    'Entretien Bureau',
    'Climatisation',
    'Autre'
  ];

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header activeLink="devis" />

      <main className="flex-grow pt-20">
        {/* ============ HERO ============ */}
        <section className="bg-gradient-to-r from-primary to-primary-container py-16 px-6 text-on-primary">
          <div className="max-w-[1400px] mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Demander un devis</h1>
            <p className="text-xl text-on-primary/90">Service gratuit et sans engagement</p>
          </div>
        </section>

        {/* ============ FORM ============ */}
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl shadow-lg border border-outline-variant/20">
              {submitted ? (
                <div className="text-center py-10 animate-fade-in">
                  <div className="text-6xl mb-6">✅</div>
                  <h2 className="text-3xl font-bold text-on-surface mb-4">Demande envoyée !</h2>
                  <p className="text-lg text-on-surface-variant mb-8">
                    Votre demande de devis a bien été soumise. Vous recevrez une réponse par email dans les plus brefs délais.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData(prev => ({ ...prev, service: '', date: '', description: '' }));
                    }}
                    className="px-8 py-3 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    Faire une autre demande
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-on-surface mb-8">Remplissez le formulaire</h2>

                  <div className="space-y-6">
                {/* Service */}
                <div className="animate-fade-in-up">
                  <label htmlFor="service" className="block text-on-surface font-bold mb-2">
                    Service demandé *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-outline-variant rounded-lg focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Sélectionnez un service...</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Name */}
                <div className="animate-fade-in-up" style={{ animationDelay: '50ms' }}>
                  <label htmlFor="name" className="block text-on-surface font-bold mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-outline-variant rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                {/* Email */}
                <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                  <label htmlFor="email" className="block text-on-surface font-bold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-outline-variant rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                {/* Phone */}
                <div className="animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                  <label htmlFor="phone" className="block text-on-surface font-bold mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-outline-variant rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="+228 XX XX XX XX"
                  />
                </div>

                {/* Preferred Date */}
                <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <label htmlFor="date" className="block text-on-surface font-bold mb-2">
                    Date souhaitée
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-outline-variant rounded-lg focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                {/* Description */}
                <div className="animate-fade-in-up" style={{ animationDelay: '250ms' }}>
                  <label htmlFor="description" className="block text-on-surface font-bold mb-2">
                    Description du projet
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-outline-variant rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Décrivez votre projet en détail..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Demander un devis
                </button>

                  </div>
                </>
              )}
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};