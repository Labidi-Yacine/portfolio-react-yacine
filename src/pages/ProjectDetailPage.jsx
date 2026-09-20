import { useParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import ProjectNav from "../components/ProjectNav";
import TagLinks from "../components/TagLinks";
import { projects, skills } from "../data/portfolioData";
import NotFoundPage from "./NotFoundPage";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) return <NotFoundPage />;

  const linkedSkills = project.skillSlugs
    .map((skillSlug) => skills.find((skill) => skill.slug === skillSlug))
    .filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow={`Réalisation — ${project.period}`}
        title={project.title}
        intro={project.shortDescription}
      />

      <div className="container">
        <ProjectNav />
      </div>

      <article className="section article-page">
        <div className="container narrow prose">
          <section>
            <p className="section-number">01</p>
            <h2>Présentation du projet</h2>
            <p>{project.presentation}</p>

            <h3>Mon rôle</h3>
            <p>{project.myRole}</p>

            {project.technologies?.length > 0 && (
              <>
                <h3>Technologies et outils mobilisés</h3>
                <ul className="check-list">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </>
            )}
          </section>

          <section>
            <p className="section-number">02</p>
            <h2>Cadrage : objectifs, contexte, enjeux et risques</h2>

            <h3>Objectifs</h3>
            <p>{project.objectives}</p>

            <h3>Contexte</h3>
            <p>{project.context}</p>

            <h3>Enjeux</h3>
            <p>{project.stakes}</p>

            <h3>Risques identifiés</h3>
            <ul className="check-list">
              {project.risks.map((risk) => (
                <li key={risk}>{risk}</li>
              ))}
            </ul>
          </section>

          {project.design && (
            <section>
              <p className="section-number">03</p>
              <h2>Conception et architecture</h2>
              <p>{project.design}</p>

              {project.uml?.length > 0 && (
                <>
                  <h3>Modélisation UML</h3>
                  <p>
                    Les diagrammes ci-dessous permettent de formaliser le système sous plusieurs angles :
                    structure, interactions, responsabilités et enchaînement des traitements.
                  </p>
                  <ul className="check-list">
                    {project.uml.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </section>
          )}

          <section>
            <p className="section-number">04</p>
            <h2>Réalisation — les étapes suivies</h2>
            <ol className="step-list">
              {project.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>

            {project.quality?.length > 0 && (
              <>
                <h3>Tests, qualité et sécurisation</h3>
                <ul className="check-list">
                  {project.quality.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </section>

          <section>
            <p className="section-number">05</p>
            <h2>Pilotage, réunions et interactions</h2>

            {project.projectManagement && (
              <>
                <h3>Organisation et animation du projet</h3>
                <p>{project.projectManagement}</p>
              </>
            )}

            <h3>Acteurs impliqués</h3>
            <ul className="check-list">
              {project.actors.map((actor) => (
                <li key={actor}>{actor}</li>
              ))}
            </ul>
          </section>

          <section>
            <p className="section-number">06</p>
            <h2>Résultats — pour l’entreprise et pour moi</h2>
            <ul className="check-list">
              {project.results.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </section>

          <section>
            <p className="section-number">07</p>
            <h2>Les lendemains du projet</h2>
            <p>{project.future}</p>
          </section>

          <section>
            <p className="section-number">08</p>
            <h2>Mon regard critique</h2>
            <p>{project.criticalLook}</p>
          </section>

          {project.courseLinks?.length > 0 && (
            <section>
              <p className="section-number">09</p>
              <h2>Liens avec les enseignements du Mastère</h2>
              <p>
                Cette réalisation me permet de relier les notions abordées en formation à une situation
                professionnelle concrète.
              </p>
              <ul className="check-list">
                {project.courseLinks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          <section className="linked-section">
            <p className="section-number">10</p>
            <h2>Compétences rattachées</h2>
            <p>
              Les compétences ci-dessous ont été mobilisées concrètement dans cette réalisation. Elles sont
              présentées sous forme de liste afin de rendre le lien projet-compétences explicite et de créer le
              second sens de la navigation circulaire.
            </p>
            <TagLinks items={linkedSkills} type="skill" />
          </section>
        </div>
      </article>
    </>
  );
}
