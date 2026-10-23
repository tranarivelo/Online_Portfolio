# Online_Portfolio

Portfolio de Tiavina Ranarivelo : site statique en HTML, CSS et JavaScript, bilingue FR / EN, hébergé sur GitHub Pages.

## Structure

```
index.html            Accueil, projets, CV, contact
project.html          Page de détail d'un projet (project.html?id=<id>)
data/
  site.js             Email, liens, chemin du CV PDF, clé Web3Forms
  projects.js         Liste des projets (textes FR / EN, images, liens)
  cv.js               Contenu de la section CV
  i18n.js             Textes de l'interface FR / EN
assets/
  css/style.css
  js/common.js        Langue et éléments communs
  js/home.js          Rendu de l'accueil et formulaire de contact
  js/project.js       Rendu d'une page projet et visionneuse
  img/projects/<id>/  cover.webp (vignette) + 01.webp, 02.webp… (galerie)
  cv/                 CV au format PDF
```

Tout le contenu se modifie dans `data/`, sans toucher au HTML.

## Lancer en local

Les fichiers peuvent s'ouvrir directement dans le navigateur. Pour un comportement identique à la mise en ligne :

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

## Mise en ligne

1. Pousser sur la branche `main`.
2. Sur GitHub : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
3. Le workflow `.github/workflows/deploy.yml` publie le site à chaque push sur
   `https://tranarivelo.github.io/Online_Portfolio/`.

## Formulaire de contact

Le formulaire envoie les messages via [Web3Forms](https://web3forms.com) (gratuit, 250 envois par mois).
Créer une clé d'accès avec son adresse email, puis la renseigner dans `data/site.js` (`web3formsKey`).
Cette clé est conçue pour être publique.

## Ajouter un projet

1. Créer `assets/img/projects/<id>/` avec `cover.webp` et les images de la galerie (`01.webp`, `02.webp`…).
2. Copier un bloc dans `data/projects.js`, puis renseigner `id`, `category` (`apps`, `games` ou `mods`), les textes et la liste `images`.

## À compléter

Rechercher `TODO` dans `data/` :

- `site.js` : email, URL LinkedIn, clé Web3Forms, et déposer le CV dans `assets/cv/CV_Tiavina_Ranarivelo.pdf`
- `projects.js` : contexte et année des projets, liens vers les dépôts, captures de Time Manager, vidéos de WeFly et d'Artemis (URL d'intégration YouTube ou Vimeo)
- `cv.js` : niveau d'anglais
