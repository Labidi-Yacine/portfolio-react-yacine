import { Link } from 'react-router-dom';
import { profile, projects, skills } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const strongestSkills = [...skills].sort((a, b) => b.level - a.level).slice(0, 4);

  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Portfolio — Expert ingénierie du logiciel</p>
            <h1>
              Concevoir des solutions <span>utiles, fiables et évolutives.</span>
            </h1>
            <p className="lead">{profile.tagline}</p>
            <div className="button-row">
              <Link className="button primary" to="/realisations">
                Découvrir mes réalisations
              </Link>
              <Link className="button secondary" to="/presentation">
                Lire ma présentation
              </Link>
            </div>
          </div>

          <aside className="hero-profile-card" aria-label="Carte de présentation">
            <img src={profile.photo} alt={`Portrait de ${profile.firstName} ${profile.lastName}`} />
            <div>
              <p className="eyebrow">Profil</p>
              <h2>
                {profile.firstName} {profile.lastName}
              </h2>
              <p>{profile.title}</p>
              <span>{profile.location}</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Compétences</p>
              <h2>Un profil technique et humain</h2>
            </div>
            <Link className="text-link" to="/competences">
              Voir les 10 compétences <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mini-skill-grid">
            {strongestSkills.map((skill) => (
              <Link key={skill.slug} to={`/competences/${skill.slug}`} className="mini-skill">
                <span>{skill.category}</span>
                <strong>{skill.title}</strong>
                <small>{skill.level}% — niveau actuel estimé</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Réalisations</p>
              <h2>Des projets reliés à des résultats concrets</h2>
            </div>
            <Link className="text-link" to="/realisations">
              Voir les 5 réalisations <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="card-grid three-columns">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section callout-section">
        <div className="container callout">
          <div>
            <p className="eyebrow">Parcours</p>
            <h2>De la spécialité NSI à l’ingénierie logicielle en alternance</h2>
            <p>
              Une frise antéchronologique présente mes formations, expériences, missions et liens
              vers les compétences et réalisations associées.
            </p>
          </div>
          <Link className="button primary" to="/parcours">
            Explorer mon parcours
          </Link>
        </div>
      </section>
    </>
  );
}
