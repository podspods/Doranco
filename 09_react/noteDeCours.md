## Documentation
<[back](./README.md)>


[doc Djeg](https://github.com/Djeg/formation-react/tree/session/13-02-23/17-02-23)

[React site](https://reactjs.org/)

[doc officiel](https://beta.reactjs.org/learn#)

[Youtube Grafikart](https://grafikart.fr/tutoriels/react)

[OpenClassroom](https://openclassrooms.com/en/courses/7132446-create-a-web-application-with-react-js)


## bootStrapper

Un bootstraper est un outil de démarage nous permettant de mettre en place tout les fichiers et dossier pur commencer à travailler en react.

Il en éxiste plusieurs sur la marché :

[CRA](https://create-react-app.dev/docs/getting-started/) : C'est l'outil officiel installant tout un tas de dépendance (webpack etc ..) permettant de demarrer facilement un projet react

[vite](https://vitejs.dev/guide/) : c'est l'outil le plus performan du marché permettant de démarrer une application react.

creation d'une application react

```bash
$ npm create vite@latest mon-application-react --template
```


dans mon cas

```bash
17:30 %>npm create vite@latest 01_helloWord --template
✔ Package name: … react
✔ Select a framework: › React
✔ Select a variant: › TypeScript

Scaffolding project in /home/arfmazad/Documents/2022/poleEmploie/formation/Doranco/2_cours/09_react/01_helloWord...

Done. Now run:

  cd 01_helloWord
  npm install
  npm run dev
```

```bash
17:30 %>npm i

added 83 packages, and audited 84 packages in 9s

8 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

```bash
17:30 %>npm run dev

> react@0.0.0 dev
> vite


  VITE v4.1.1  ready in 767 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

## developpement mobil-first

## Arborescence d'une application react

Dans une application react, vous retrouverez généralement les fichiers suivant :

- `package.json / package-lock.json` : Votre projet javascript, c'est ce fichier qui contient les dépendances
- `tsconfig.json / tsconfig.node.json` : Ce sont de fichier de configuration pour typescript
- `vite.config.ts` : Petit fichier de configuration pour vite
- `.gitignore` : Permet d'ignore certains dossier et fichier sur git
- `index.html` : C'est le fichier principal de l'application. Une application web c'est une seule page ! C'est donc le seule fichier HTML du projet !

On retrouve aussi les dossiers suivant :

- `public/` : Contient les fichiers « statiques » (comme des images), qui seront optimisé par vite lors de la mise en production ! Ici nous avons uniquement le logo de l'application
- `src/` : C'est le dossier de source, il contiendra tout votre code (html, js, ts, css etc ...)

### Arborescence du dossier `src`

De base, vite créer une petite application react avec quelques exemples de code. Parmis ces fichiers, seulement 2 nous sont véritablement nescessaire :

- `main.tsx` : Fichier principal de notre application
- `vite-env.d.ts` : Fichier de configuration pour vite et typescript

> Durant cette formation nous allons supprimer tout les autres fichiers !

installation des extension pour debug

### Installer les developper tool

C'est outil permettant de mieux débugger et utilisé un application React.

- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
- [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil)

> **Entrainez-vous**
>
> Créer une application react en utilisant vite nommé "mon-app-test". Installer les dépendances et démarrer le serveur, puis dans votre navigateur activer l'inpécteur et la vue mobile :)
>
> N'hésitez pas à installer l'extension react developper tools

Pour afficher du JSX sur une page html. Il faut importer la librairie `ReactDOM` : (extension de réact pour le dislay)

```tsx
import ReactDOM from "react-dom/client";
```

Il faut ensuite séléctionner une balise qui vas recevoir notre application react :

```tsx
const root = document.querySelector("#root") as HTMLElement;
```

https://www.figma.com/ : site à creuser

# note de cours

le composant attend toujours un objet en premeier parametre

```tsx
export type Users = {
  name: string;
  age: number;
};

export function GetUser(myUser: Users) {
```

il faut faire

```tsx
export type Users = {
  name: string;
  age: number;
};

export type GetUserProp{
  myUser : Users
}
export function GetUser({myUser}: GetUserProp) {
....


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DisplayTeacher GetUser={jane}></DisplayTeacher>
  </React.StrictMode>
);

```

#

**_notion de children de tupe Reactode_**

## main.tsx appell app.tsx qui appelle les autres composants

<hr>

# react style

[styled-components](https://styled-components.com/)

[style-css-helper](https://unbug.github.io/codelf/#Textbox)
