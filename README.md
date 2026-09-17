# Portfolio EIL — React JavaScript

Base complète construite pour couvrir la grille d'évaluation du portfolio **Expert ingénierie du logiciel**.
Le projet utilise **React JavaScript**, sans TypeScript, avec Vite et React Router.

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir l'adresse indiquée par Vite, généralement `http://localhost:5173`.

## Construire la version de production

```bash
npm run build
npm run preview
```

Le dossier `dist` peut ensuite être déployé sur Netlify, Vercel, GitHub Pages ou un hébergement statique.
Le projet utilise `HashRouter`, ce qui évite les erreurs 404 sur les routes lors d'un hébergement statique simple.

## Personnalisation prioritaire

1. Remplacer `public/profile-placeholder.svg` par une vraie photo, en conservant le nom du fichier ou en modifiant `profile.photo`.
2. Modifier les informations personnelles dans `src/data/portfolioData.js`.
3. Remplacer l'URL LinkedIn temporaire.
4. Vérifier les dates, intitulés, noms d'établissements et résultats chiffrés.
5. Remplacer les logos simplifiés par les logos officiels autorisés.
6. Ajouter des captures d'écran ou liens de démonstration dans les réalisations.
7. Relire l'ensemble pour que chaque phrase corresponde exactement à ton expérience réelle.

## Structure

- `src/data/portfolioData.js` : presque tout le contenu du portfolio.
- `src/pages` : pages principales et pages détaillées.
- `src/components` : menu, sous-menus, cartes, niveaux et liens croisés.
- `src/styles.css` : design responsive complet.
- `EVALUATION_CHECKLIST.md` : correspondance précise entre la grille et le site.

## Points déjà couverts

- Nom, prénom et photo sur toutes les pages.
- Accueil structuré et convaincant.
- Menu persistant au scroll.
- Présentation générale détaillée avec les 4 notions demandées.
- 10 compétences comparées, réparties en 5 techniques et 5 humaines.
- Une page détaillée par compétence avec définition, preuves, autocritique et évolution.
- 5 réalisations avec une page commune et une page détaillée par projet.
- Les 7 rubriques demandées dans chaque réalisation.
- Frise antéchronologique du parcours.
- Deux niveaux de lecture pour les expériences et formations.
- Test/certification avec date et intitulé.
- Navigation circulaire compétences ↔ réalisations.
- Page contact et coordonnées dans le pied de page.
- Responsive, navigation clavier et structure sémantique.
