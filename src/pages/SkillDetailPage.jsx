import { Link, useParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import SkillLevel from "../components/SkillLevel";
import SkillNav from "../components/SkillNav";
import TagLinks from "../components/TagLinks";
import { projects, skills } from "../data/portfolioData";
import NotFoundPage from "./NotFoundPage";

export default function SkillDetailPage() {
  const { slug } = useParams();
  const skill = skills.find((item) => item.slug === slug);

  if (!skill) return <NotFoundPage />;

  const linkedProjects = skill.projectSlugs
    .map((projectSlug) => projects.find((project) => project.slug === projectSlug))
    .filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow={`Compétence ${skill.category.toLowerCase()}`}
        title={skill.title}
        intro={skill.summary}
      >
        <div className="hero-level">
          <SkillLevel label="Niveau actuel estimé" level={skill.level} />
        </div>
      </PageHero>

      <div className="container">
        <SkillNav />
      </div>

      <article className="section article-page">
        <div className="container narrow prose">
          <section>
            <p className="section-number">01</p>
            <h2>Présentation de la compétence</h2>
            <p>{skill.overview}</p>
          </section>

          <section>
            <p className="section-number">02</p>
            <h2>Ma définition</h2>
            <p>{skill.definition}</p>
            <h3>Contexte professionnel et actualité</h3>
            <p>{skill.currentContext}</p>

            {skill.practices?.length > 0 && (
              <>
                <h3>Concrètement, ce que je mets en pratique</h3>
                <ul className="check-list">
                  {skill.practices.map((practice) => (
                    <li key={practice}>{practice}</li>
                  ))}
                </ul>
              </>
            )}
          </section>

          <section>
            <p className="section-number">03</p>
            <h2>Mes éléments de preuve</h2>
            <div className="evidence-list">
              {skill.evidence.map((item, index) => (
                <article className="evidence-card" key={item.title}>
                  <p className="card-meta">Anecdote {index + 1}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <p>
                    <strong>Résultat et valeur ajoutée :</strong> {item.result}
                  </p>
                  <Link className="text-link" to={`/realisations/${item.projectSlug}`}>
                    Voir la réalisation associée <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section>
            <p className="section-number">04</p>
            <h2>Mon autocritique</h2>
            <h3>Niveau de maîtrise</h3>
            <p>{skill.selfCritique.mastery}</p>
            <h3>Place dans mon profil</h3>
            <p>{skill.selfCritique.importance}</p>
            <h3>Vitesse d’acquisition</h3>
            <p>{skill.selfCritique.acquisition}</p>
            <h3>Conseil et recul</h3>
            <p>{skill.selfCritique.advice}</p>
          </section>

          <section>
            <p className="section-number">05</p>
            <h2>Mon évolution dans cette compétence</h2>
            <h3>Niveau visé à moyen terme</h3>
            <p>{skill.evolution.target}</p>
            <h3>Formations et autoformations prévues</h3>
            <p>{skill.evolution.training}</p>
          </section>

          <section className="linked-section">
            <p className="section-number">06</p>
            <h2>Réalisations rattachées</h2>
            <p>
              Cette liste relie directement cette compétence aux réalisations dans lesquelles je l’ai
              réellement mobilisée. Chaque lien permet de poursuivre la navigation sans revenir à la page
              d’ensemble.
            </p>
            <TagLinks items={linkedProjects} type="project" />
          </section>
        </div>
      </article>
    </>
  );
}
