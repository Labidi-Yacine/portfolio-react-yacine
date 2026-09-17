import { NavLink } from 'react-router-dom';
import { skills } from '../data/portfolioData';

export default function SkillNav() {
  return (
    <nav className="subnav" aria-label="Sous-menu des compétences">
      <NavLink to="/competences" end>
        Vue d’ensemble
      </NavLink>
      {skills.map((skill) => (
        <NavLink key={skill.slug} to={`/competences/${skill.slug}`}>
          {skill.title}
        </NavLink>
      ))}
    </nav>
  );
}
