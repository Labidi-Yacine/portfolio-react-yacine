export default function PageHero({ eyebrow, title, intro, children }) {
  return (
    <section className="page-hero">
      <div className="container narrow">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {intro && <p className="lead">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
