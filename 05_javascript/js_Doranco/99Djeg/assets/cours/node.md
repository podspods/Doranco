# NodeJS et NPM

NodeJS et NPM, ce sont des outils qui ont modifié et popularisé javascript. Sans eux, javascript serait resté un petit langage « bac à sable ».

NodeJS c'est la possibilité d'éxécuter du code javascript directement sur un ordinateur en dehors d'un navigateur ! Il permet à javascript de créer **n'importe quelle application**

> Exemple : VSCode est un programme développé en javascript et utilisant nodejs :)

> Autre exemple : Uber Eats est une application Android et IOS développé en javascript et utilisant nodejs

## Installation

Pour installer NodeJS et npm, rendez-vous sur le sitoe officiel et [téléchargez le](https://nodejs.org/dist/v18.13.0/node-v18.13.0-x86.msi) et installez le.

Une fois nodejs installer vous pouvez vous assurez du bon fonctionnement en vous rendant dans un terminal et en rentrant les commandes suivante :

```bash
$ node --version
$ npm --version
```

> NodeJS et NPM se sont deux outils qui s'utilisent en ligne de commandes (dans un terminal)

## `node`

`node` c'est compilateur et interpreteur de javascript. Il permet de lancer un programme écrit en javascript directement sur votre ordinateur, et non sur le navigateur.

Pour fonctionner il suffit de spécifier à la commande `node` un argument, le nom du fichier que l'on veut lancer :

```bash
$ node monProgramme.js
```

> Sur windows, la plupart des programme utilise l'extension `.exe`, ici même pas besoin. Node s'occupe de tout ! Il est cependant possible de créer un `.exe` en utilisant node.

## `npm`

`npm` (Node Package Manager) c'est le chef d'orchestre de n'importe quelle projet javascript ! C'est lui qui s'occupe d'installer tout ce que notre programme à besoin pour fonctionner, il s'occupe de compilé notre application dans certains cas, de créer les fichiers nescessaire, de lancer notre programme etc ...

Pour fonctionner, `npm` à besoin d'un petit fichier de configuration c'est le `package.json`. Ce fichier contient la configuration d'un projet en javascript. Il est **essentiel** !

Nous pouvons dans un dossier vide créer notre premier projet javascript en utilisant `npm` :

```bash
$ mkdir monprojet
$ cd monprojet
# Création du package.json un nouveau projet javascript
$ npm init -y
```

> Tout les projets javascript d'aujourd'hui, utilise le `package.json` !

### Les librairies (ou modules)

Une librairie (ou un module en javascript), c'est du code javascript, souvent développé par d'autres personnes et « open source » (gratuite) que l'on peut librement utilisé dans notre propre code.

En effet, souvent nous somes ammené à faire du code que d'autres personnes on déja fait (formatter une date en français, générer un nombre aléatoire, etc ...). Ces librairies (module en javascript) nous sont très utile ! Elle nous permettent de ne pas avoir à coder nous même cetaines opérations etc ...

Il en éxiste énormément des millards de librairies javascript, permettant de faire tout un panel de chose. **TOUTES** ces librairies sont « référencé » sur un seul et même site internet : https://www.npmjs.com/

Chaque librairie présente sur le site de npm possède un « repository git » (github). C'est à dire que l'on peut consulter et analyser le code de la librairie.

### Installer une librairie

Pour installer une librairie sur notre ordinateur, sur notre projet même il faut utiliser `npm`

```bash
$ npm install react
# Ou en racourcis
$ npm i react
```

Cette commande install le code source de la librairies dans un dossier `node_modules`. Elle génére aussi un fichier `package-lock.json` contenant les informations précise de la librairie (sa version, son dernier commit etc ...).

Si maintenant on ouvre le fichier `package.json`, nous retrouvons une section `dependencies` avec à l'intérieur la libraire `react`.

### Supprimer une librairie

Pour supprimer une librairie du projet :

```bash
$ npm remove react
$ npm rm react
```

> **TOUTES LES COMMANDES PLUS HAUT DOIVENT SE LANCER DANS LE DOSSIER DU PROJET** (pas le dossier, ni un sous dossier mais le dossier ou se trouve le fichier `package.json`)
