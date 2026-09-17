import { Link } from "react-router-dom";

export default function TagLinks({ items, type }) {
  const base = type === "project" ? "/realisations" : "/competences";

  if (!items?.length) {
    return <p className="linked-empty">Aucun élément rattaché pour le moment.</p>;
  }

  return (
    <ul className="linked-list">
      {items.map((item) => {
        const description = item.shortDescription || item.summary;

        return (
          <li key={item.slug} className="linked-list-item">
            <Link to={`${base}/${item.slug}`}>{item.title}</Link>
            {description && <p>{description}</p>}
          </li>
        );
      })}
    </ul>
  );
}
