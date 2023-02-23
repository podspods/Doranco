# comment se faire héberger un site sur Github

doc ref
https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/

prerequisit
https://pages.github.com/

1 site par compte

# site statique

## step by step page statique

créer un repository avec le nom de conexion
monGithub.github.io (contrainte)

```bash
créer un repository avec le nom de conexion
git clone https://github.com/monGithub/monGithub.github.io

cd username.github.io
echo "Hello World" > index.html
git add --all
git commit -m "Initial commit"
git push -u origin main
```

le site se trouve à

```
https://username.github.io.
```

## step by step page avec react

condition : le site tourne en local

1. installer gh-page

```bash
npm install gh-pages --save-dev
```

2. modifer package.json

avant

```json
"scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
```

apres

```json
"scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "predeploy": "npm run build", //<----------ajout ici - #1
    "deploy": "gh-pages -d build", //<--------ajout ici -- #2
  },
```

avant

```json

 "name": "maputo",
  "private": true,
  "version": "0.0.0",
```

apres

```json
name": "maputo",
  "private": true,
  "homepage": "https://emileCda.github.io/maputo",//<----------ajout ici - #1
  "version": "0.0.0",
```

creer le repertoire pour le build

```bash
mkdir build
npm run build

```

ajouter dist dans le repository du distant

```bash
git add dist -f
git commit -m "Adding dist"
git subtree push --prefix dist origin gh-pages

```

pour le resultat :

    Visit your repository.
    Go to Settings.
    Scroll down to Pages.
    There will be a link to your website.

mixe entre cheatsheet.md

https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/

https://shayreichert.com/blogs/comment-mettre-gratuitement-votre-projet-react-sur-git-hub

https://dev.to/shashannkbawa/deploying-vite-app-to-github-pages-3ane

```

```
