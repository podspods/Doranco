# todolist version mobile

[cour D-jegat](https://github.com/Djeg/formation-react/tree/session/13-02-23/17-02-23)

[Projet react](https://github.com/Djeg/formation-react/tree/session-projet/20-02-23/24-02-23)

[corection Cours Djeg](https://github.com/Djeg/formation-react/tree/session-native/24-02-23)

[design Projet](https://www.figma.com/file/bwQ0R9kNPCcCVPqpaySbpE/Todo-App?node-id=0%3A1&t=cbRxYmUjqOpfpAD7-1)

## schema réactif

![schéma réactif](./image/Todolist-mobil-home.png)

<hr>
## préparation de l'environnement

télécharcher l'appli (expo go) pour voir les dev sur le téléphone:

- Android : [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent&gl=US)
- Apple : [Expo Go](https://apps.apple.com/us/app/expo-go/id982107779)

?? quid du débuggage ?

### creation du projet

```bash
npx create-expo-app nonDuProjetAMettreIci --template
```

choisir les option Blank(typescript)

![](./image/choixInstall.png)

pour démarrer l'application

```bash
npm start
```

![qrcode appli](./image/qrcode.png)

scanner le qrcode pour lancer l'application coté téléphone : application expo-go

## Installation des packages complémentaire

attention il y a des package spécifique pour mobile qui sont différent de browser web

### styled component

```bash
npm i styled-components
npm i -D @types/styled-components @types/styled-components-react-native
```

### font (exemple lobster)

```bash
npx expo install expo-font @expo-google-fonts/lobster --save
```

a Faire dans le App

```js
cosnt [useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";/// a vérifier

const [isFontInstalled] = useFonts({ Lobster_400medium })
const [isFontInstalled] = useFonts({ Lobster_400medium })

  // Je m'assure que la police soit installé :
  if (!isFontInstalled) {
    return <Text>Chargement ...</Text>
  }


```

### icone (fontawesome)

```bash
npm i @expo/vector-icons
```

[les icones sont ici](https://icons.expo.fyi/)

### native router

```bash
npm i react-router-native
```

#nanostore

```bash
$ npm i nanostores @nanostores/react
```

```sh

npm install @react-navigation/native @react-navigation/native-stack

```

## arborescence projet

![Arborescence projet](./image/arboPorjet.png)
App.tsx(mobile) renplace main.tsx(browser)

### note de correction

1° charger la font avant de l'utilser dans App
2 charger une view avec les propriete globale dans App 3. Un text n'as pas besoin d'une view
4 mettre des variable pourle css 5. une view n'a pas de taille. C'est le contenu qui définit la taille 6. un composant par défaut prends tous la largeur de la view

[7. générateur de shadow pour mobile](https://ethercreative.github.io/react-native-shadow-generator/)

8. styliser directelent le touchableOpacity pour avoir un bouton clikable

attention nodejs en version 16 pour l'émulateur

# mobil-tolist

ven. 24 févr. 2023 21:18:09 CET
develop
ven. 24 févr. 2023 21:19:58 CET
branche feature-screen1
