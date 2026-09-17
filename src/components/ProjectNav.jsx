import { NavLink } from 'react-router-dom';
import { projects } from '../data/portfolioData';

export default function ProjectNav() {
  return (
    <nav className="subnav" aria-label="Sous-menu des réalisations">
      <NavLink to="/realisations" end>
        Vue d’ensemble
      </NavLink>
      {projects.map((project) => (
        <NavLink key={project.slug} to={`/realisations/${project.slug}`}>
          {project.title}
        </NavLink>
      ))}
    </nav>
  );
}
