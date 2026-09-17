import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="section not-found">
      <div className="container narrow">
        <p className="eyebrow">Erreur 404</p>
        <h1>Cette page n’existe pas.</h1>
        <p>Le contenu recherché a peut-être été déplacé ou renommé.</p>
        <Link className="button primary" to="/">
          Retour à l’accueil
        </Link>
      </div>
    </section>
  );
}
