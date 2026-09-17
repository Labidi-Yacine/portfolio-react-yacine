import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { profile, projects, skills } from "../data/portfolioData";
import "../styles.css";

const navClass = ({ isActive }) => (isActive ? "active" : undefined);

const simpleNavItems = [
  { to: "/parcours", label: "Parcours" },
  { to: "/contact", label: "Contact" },
];

function DropdownNav({ label, overviewTo, items, itemBase }) {
  const location = useLocation();
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const isSectionActive =
    location.pathname === overviewTo || location.pathname.startsWith(`${overviewTo}/`);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handlePointerDown(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={containerRef} className={`nav-dropdown${isOpen ? " open" : ""}`}>
      <button
        type="button"
        className={`nav-dropdown-trigger${isSectionActive ? " active" : ""}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>{label}</span>
        <span className="nav-dropdown-chevron" aria-hidden="true">▾</span>
      </button>

      {isOpen && (
        <div className="nav-dropdown-menu">
          <NavLink to={overviewTo} end className={navClass}>
            Vue d’ensemble
          </NavLink>
          <div className="nav-dropdown-separator" aria-hidden="true" />
          {items.map((item) => (
            <NavLink key={item.slug} to={`${itemBase}/${item.slug}`} className={navClass}>
              {item.title}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Layout() {
  const hasLinkedIn = profile.linkedin && !profile.linkedin.includes("TON-PROFIL");

  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenu-principal">
        Aller au contenu
      </a>

      <header className="site-header">
        <div className="header-inner">
          <NavLink to="/" className="identity" aria-label="Retour à l'accueil">
            <img src={profile.photo} alt={`Portrait de ${profile.firstName} ${profile.lastName}`} />
            <span>
              <strong>{profile.firstName} {profile.lastName}</strong>
              <small>{profile.title}</small>
            </span>
          </NavLink>

          <nav className="main-nav" aria-label="Navigation principale">
            <NavLink to="/" end className={navClass}>Accueil</NavLink>
            <NavLink to="/presentation" className={navClass}>Présentation</NavLink>

            <DropdownNav
              label="Compétences"
              overviewTo="/competences"
              items={skills}
              itemBase="/competences"
            />

            <DropdownNav
              label="Réalisations"
              overviewTo="/realisations"
              items={projects}
              itemBase="/realisations"
            />

            {simpleNavItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main id="contenu-principal">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div>
          <strong>{profile.firstName} {profile.lastName}</strong>
          <p>{profile.title}</p>
        </div>
        <div className="footer-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          {hasLinkedIn && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          )}
        </div>
      </footer>
    </div>
  );
}
