import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SkillLevel from "../components/SkillLevel";
import SkillNav from "../components/SkillNav";
import { skills } from "../data/portfolioData";

export default function SkillsPage() {
  const technicalSkills = skills.filter((skill) => skill.category === "Technique");
  const humanSkills = skills.filter((skill) => skill.category === "Humaine");

  return (
    <>
      <PageHero eyebrow="10 compétences comparées" title="Mes compétences techniques et humaines" intro="Le schéma ci-dessous présente mon niveau actuel estimé pour chacune des dix compétences. Les niveaux permettent de les comparer entre elles et sont détaillés dans un article dédié." />

      <div className="container">
        <SkillNav />
      </div>

      <section className="section">
        <div className="container skills-overview-grid">
          <article className="skill-domain-card">
            <div className="section-heading">
              <p className="eyebrow">Domaine 1</p>
              <h2>Compétences techniques</h2>
              <p>Concevoir, développer, intégrer et fiabiliser des solutions logicielles.</p>
            </div>
            <div className="skill-chart">
              {technicalSkills.map((skill) => (
                <Link key={skill.slug} to={`/competences/${skill.slug}`}>
                  <SkillLevel label={skill.title} level={skill.level} />
                </Link>
              ))}
            </div>
          </article>

          <article className="skill-domain-card">
            <div className="section-heading">
              <p className="eyebrow">Domaine 2</p>
              <h2>Compétences humaines</h2>
              <p>Analyser, apprendre, communiquer et faire avancer un projet avec les autres.</p>
            </div>
            <div className="skill-chart">
              {humanSkills.map((skill) => (
                <Link key={skill.slug} to={`/competences/${skill.slug}`}>
                  <SkillLevel label={skill.title} level={skill.level} />
                </Link>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="card-grid two-columns">
            {skills.map((skill) => (
              <article className="card" key={skill.slug}>
                <p className="card-meta">
                  {skill.category} — {skill.level}%
                </p>
                <h2>{skill.title}</h2>
                <p>{skill.summary}</p>
                <Link className="text-link" to={`/competences/${skill.slug}`}>
                  Lire l’article complet <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
