import { useState } from 'react';
import PageHero from '../components/PageHero';
import { profile } from '../data/portfolioData';

export default function ContactPage() {
  const hasLinkedIn = profile.linkedin && !profile.linkedin.includes('TON-PROFIL');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const subject = encodeURIComponent(form.subject || `Contact portfolio — ${form.name}`);
    const body = encodeURIComponent(
      `Nom : ${form.name}\nE-mail : ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Échangeons autour d’un projet ou d’une opportunité"
        intro="Mes coordonnées restent accessibles depuis le menu principal et depuis le pied de chaque page."
      />

      <section className="section">
        <div className="container contact-grid">
          <article className="contact-card">
            <p className="eyebrow">Coordonnées</p>
            <h2>
              {profile.firstName} {profile.lastName}
            </h2>
            <p>{profile.title}</p>
            <dl className="contact-list">
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </dd>
              </div>
              <div>
                <dt>Localisation</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>GitHub</dt>
                <dd>
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    Consulter mon profil
                  </a>
                </dd>
              </div>
              {hasLinkedIn && (
                <div>
                  <dt>LinkedIn</dt>
                  <dd>
                    <a href={profile.linkedin} target="_blank" rel="noreferrer">
                      Consulter mon profil
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </article>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field-grid">
              <label>
                Nom
                <input name="name" value={form.name} onChange={updateField} required />
              </label>
              <label>
                E-mail
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateField}
                  required
                />
              </label>
            </div>
            <label>
              Objet
              <input name="subject" value={form.subject} onChange={updateField} required />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows="8"
                value={form.message}
                onChange={updateField}
                required
              />
            </label>
            <button className="button primary" type="submit">
              Préparer l’e-mail
            </button>
            <p className="form-note">
              Le bouton ouvre le logiciel de messagerie avec les informations saisies. Aucun message
              n’est stocké sur ce site.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
