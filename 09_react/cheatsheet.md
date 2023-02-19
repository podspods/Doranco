# CheatSheet Reac

1. **creation d'une application react**

repertoire = 02_sandBox

```bash
npm create vite@latest 02_sandBox --template
cd 02_sandBox
npm install
npm i styled-components
npm i -D @types/styled-components

npm i react-router react-router-dom

npm run dev
```

2. Clean project

```bash
rm  -rf src/assets/
rm  -rf src/App.css
rm  -rf src/App.tsx
rm  -rf src/index.css
```

dans le fichier src/main.tsx
supprimer les lignes :

```tsx
import App from "./App";
import "./index.css";

<App />;
```

main.tsx de démarrage

```tsx
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode></React.StrictMode>
);
```

add directories

```bash
mkdir src/components
mkdir src/types
mkdir src/style
```

Github

```bash
echo "# morpion" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/podspods/morpion.git
git push -u origin main
```
