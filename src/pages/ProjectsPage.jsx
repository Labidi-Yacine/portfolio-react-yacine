import PageHero from "../components/PageHero";
import ProjectCard from "../components/ProjectCard";
import ProjectNav from "../components/ProjectNav";
import { projects } from "../data/portfolioData";

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="5 réalisations" title="Mes principales réalisations" intro="Chaque projet porte un nom autonome, présente son contexte et ses résultats, puis renvoie vers les compétences mobilisées." />

      <div className="container">
        <ProjectNav />
      </div>

      <section className="section">
        <div className="container card-grid two-columns">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
