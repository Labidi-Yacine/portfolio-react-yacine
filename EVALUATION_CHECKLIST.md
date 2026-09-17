# Checklist de conformité à la grille EIL

Cette checklist reprend l'intégralité de la grille et indique où chaque attente est couverte.

## Identité

- [x] Prénom, nom et photo dans le header de toutes les pages.
- [x] Identité également visible dans le footer et sur l'accueil.
- [ ] Remplacer la photo temporaire par la photo définitive.

## Page d'accueil — 5 points

- [x] Hero attractif avec promesse professionnelle.
- [x] Appels à l'action vers les réalisations et la présentation.
- [x] Aperçu des compétences, réalisations et du parcours.
- [x] Structure claire et responsive.

## Menu — 3 points

- [x] Présent sur toutes les pages via `Layout.jsx`.
- [x] Persistant au scroll grâce à `position: sticky`.
- [x] Libellés courts : Accueil, Présentation, Compétences, Réalisations, Parcours, Contact.

## Présentation générale — 15 points

Page : `/presentation`

- [x] Article dans une page dédiée.
- [x] Article structuré avec titres, sous-titres et paragraphes.
- [x] Mes valeurs.
- [x] Mon projet professionnel et personnel.
- [x] Mes principales qualités humaines.
- [x] Mes principaux centres d'intérêt.
- [x] Introduction centrée sur une vision du métier, sans démarrer par « Je m'appelle ».

## Vue commune des compétences — 10 points

Page : `/competences`

- [x] Exactement 10 compétences.
- [x] 5 compétences techniques.
- [x] 5 compétences humaines.
- [x] Deux domaines clairement séparés.
- [x] Niveaux comparables dans un schéma de barres.
- [x] Accès par le menu principal.
- [x] Chaque barre et chaque carte mène à la compétence correspondante.

## Chaque compétence — 30 points

Pages : `/competences/:slug`

- [x] Une page dédiée par compétence.
- [x] Accès depuis la page commune.
- [x] Sous-menu présent sur toutes les pages de compétence.
- [x] Article structuré et détaillé.
- [x] Définition dans un contexte professionnel.
- [x] Mise en relation avec un contexte actuel.
- [x] 1 à 3 anecdotes par compétence ; la base en contient 2.
- [x] Preuve de mise en œuvre.
- [x] Résultat et valeur ajoutée pour chaque anecdote.
- [x] Lien vers la réalisation associée.
- [x] Niveau de maîtrise.
- [x] Place et priorité dans le profil.
- [x] Vitesse d'acquisition.
- [x] Conseil et prise de recul.
- [x] Niveau visé à moyen terme.
- [x] Formations ou autoformations prévues.
- [x] Liste finale des réalisations rattachées avec liens.

## Vue commune des réalisations — 5 points

Page : `/realisations`

- [x] Exactement 5 réalisations.
- [x] Page accessible depuis le menu principal.
- [x] Présentation sous forme de pavés.
- [x] Chaque pavé contient un descriptif court.
- [x] Chaque pavé mène vers une réalisation détaillée.

## Chaque réalisation — 20 points

Pages : `/realisations/:slug`

- [x] Accessible depuis la page commune.
- [x] Sous-menu présent sur toutes les pages de réalisation.
- [x] Nom évocateur et autonome.
- [x] Page spécifique, structurée et détaillée.
- [x] Présentation et définition.
- [x] Objectifs, contexte, enjeux et risques.
- [x] Étapes et actions réalisées.
- [x] Acteurs et interactions.
- [x] Résultats pour l'entreprise et pour moi.
- [x] Lendemains : court terme, moyen terme et situation actuelle.
- [x] Regard critique.
- [x] Liste finale des compétences rattachées avec liens.

## Parcours — 5 points

Page : `/parcours`

- [x] Frise verticale.
- [x] Ordre antéchronologique.

## Chaque expérience — 5 points

- [x] Période.
- [x] Poste ou diplôme.
- [x] Lieu et logo.
- [x] Logos de formation cliquables vers le site institutionnel.
- [x] Second niveau de lecture avec `<details>`.
- [x] Responsabilité et statut pour l'expérience en entreprise.
- [x] Missions et positionnement.
- [x] Présentation de la pédagogie pour les formations.
- [x] Liens vers réalisations et compétences rattachées.
- [x] Section test/certification avec date et intitulé.

## Navigation circulaire

- [x] Chaque compétence renvoie vers toutes ses réalisations.
- [x] Chaque réalisation renvoie vers toutes ses compétences.
- [x] Les liens sont générés depuis les mêmes identifiants afin d'éviter les incohérences.

## Contact — 2 points

- [x] Page contact accessible depuis le menu.
- [x] Coordonnées dans le footer de toutes les pages.
- [x] Formulaire ouvrant le client de messagerie.

## Orthographe

- [x] Contenu initial relu et accents conservés.
- [ ] Faire une dernière relecture après chaque personnalisation.
- [ ] Vérifier les noms propres, dates et accords ajoutés manuellement.

## Vérifications finales avant remise

- [ ] Toutes les affirmations correspondent à des faits réels et défendables à l'oral.
- [ ] Tous les liens externes fonctionnent.
- [ ] Toutes les réalisations contiennent au moins une preuve visuelle ou un lien utile si possible.
- [ ] La vraie photo et les vrais logos sont intégrés.
- [ ] Le site est testé sur ordinateur et mobile.
- [ ] `npm run build` se termine sans erreur.
- [ ] Le site déployé est accessible sans authentification.
