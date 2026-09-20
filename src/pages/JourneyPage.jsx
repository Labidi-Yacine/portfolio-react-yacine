import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { certifications, journey, projects, skills } from "../data/portfolioData";

function findItems(slugs, collection) {
  return slugs.map((slug) => collection.find((item) => item.slug === slug)).filter(Boolean);
}

export default function JourneyPage() {
  return (
    <>
      <PageHero eyebrow="Frise antéchronologique" title="Mon parcours" intro="Les expériences les plus récentes apparaissent en premier. Chaque étape offre un premier niveau de lecture, puis un détail des missions, de la pédagogie et des liens associés." />

      <section className="section">
        <div className="container narrow">
          <div className="timeline">
            {journey.map((entry) => {
              const linkedProjects = findItems(entry.projectSlugs, projects);
              const linkedSkills = findItems(entry.skillSlugs, skills);

              return (
                <article className="timeline-entry" key={entry.id}>
                  <div className="timeline-marker" aria-hidden="true" />
                  <div className="timeline-card">
                    <div className="timeline-topline">
                      <p className="card-meta">{entry.period}</p>
                      <a className="institution-logo" href={entry.website} target={entry.website === "#" ? undefined : "_blank"} rel={entry.website === "#" ? undefined : "noreferrer"} aria-label={`Site de ${entry.place}`}>
                        <img src={entry.logo} alt={`Logo ${entry.place}`} />
                      </a>
                    </div>

                    <p className="eyebrow">{entry.type === "experience" ? "Expérience en entreprise" : "Formation"}</p>
                    <h2>{entry.title}</h2>
                    <p className="timeline-place">{entry.place}</p>
                    <p>{entry.summary}</p>

                    <details>
                      <summary>Lire la suite</summary>
                      <div className="details-content">
                        {entry.type === "experience" ? (
                          <>
                            <h3>Responsabilité et statut</h3>
                            <p>
                              <strong>{entry.status}.</strong> {entry.responsibility}
                            </p>
                            <h3>Missions et positionnement</h3>
                            <ul className="check-list">
                              {entry.details.map((detail) => (
                                <li key={detail}>{detail}</li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <>
                            <h3>Présentation et vision de la pédagogie</h3>
                            <p>{entry.vision}</p>
                          </>
                        )}

                        {linkedProjects.length > 0 && (
                          <>
                            <h3>Réalisations rattachées</h3>
                            <div className="tag-list">
                              {linkedProjects.map((project) => (
                                <Link key={project.slug} className="tag-link" to={`/realisations/${project.slug}`}>
                                  {project.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}

                        {linkedSkills.length > 0 && (
                          <>
                            <h3>Compétences rattachées</h3>
                            <div className="tag-list">
                              {linkedSkills.map((skill) => (
                                <Link key={skill.slug} className="tag-link" to={`/competences/${skill.slug}`}>
                                  {skill.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </details>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container narrow">
          <div className="section-heading">
            <p className="eyebrow">Tests et certifications</p>
            <h2>Dates et intitulés</h2>
          </div>
          <div className="card-grid">
            {certifications.map((certification) => (
              <article className="card" key={`${certification.date}-${certification.title}`}>
                <p className="card-meta">{certification.date}</p>
                <h3>{certification.title}</h3>
                <p>{certification.note}</p>
                <p>{certification.score}</p>
                <a href={certification.link} target="_blank" rel="noreferrer" className="text-link">
                  Voir le certificat <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
