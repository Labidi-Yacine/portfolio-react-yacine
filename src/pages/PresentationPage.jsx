import PageHero from "../components/PageHero";
import { presentation } from "../data/portfolioData";

export default function PresentationPage() {
  return (
    <>
      <PageHero eyebrow="Présentation générale" title="Une vision responsable et concrète de l’ingénierie logicielle" intro={presentation.intro} />

      <article className="section article-page">
        <div className="container narrow prose">
          <section>
            <p className="section-number">01</p>
            <h2>Mes valeurs</h2>
            <div className="value-grid">
              {presentation.values.map((value) => (
                <div className="value-card" key={value.title}>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <p className="section-number">02</p>
            <h2>Mon projet professionnel et personnel</h2>
            <h3>Projet professionnel</h3>
            <p>{presentation.professionalProject}</p>
            <h3>Projet personnel</h3>
            <p>{presentation.personalProject}</p>
          </section>

          <section>
            <p className="section-number">03</p>
            <h2>Mes principales qualités humaines</h2>
            <ul className="check-list">
              {presentation.humanQualities.map((quality) => (
                <li key={quality}>{quality}</li>
              ))}
            </ul>
          </section>

          <section>
            <p className="section-number">04</p>
            <h2>Mes principaux centres d’intérêt</h2>
            <ul className="check-list">
              {presentation.interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </>
  );
}
