import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <article className="card project-card">
      <p className="card-meta">{project.period}</p>
      <h2>{project.title}</h2>
      <p>{project.shortDescription}</p>
      <Link className="text-link" to={`/realisations/${project.slug}`}>
        Consulter la réalisation <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
