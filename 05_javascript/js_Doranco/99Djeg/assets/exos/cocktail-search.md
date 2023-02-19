# Coktail Search

L'objectif est de développez une petite application en « single page » (tout se fais en javascript) de recherche de cocktails.

## Les maquettes

Vous pouvez consulter les maquettes du projet juste ici :

[Les Maquettes](https://www.figma.com/file/JuMwx8MNK7es1N2Hy5StkH/CoktailSearch?node-id=0%3A1&t=6tEUJHlGgM70BCMi-1)

## L'api ou les données

Les cocktails sont disponible sur une api public :

https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mo

> Le **filtre** `s` ç la fin de l'url correspond à votre recherche.

## La mise en place

1. Créer un projet (dans un tout nouveau dossier) javascript en utilisant `npm` et le package.json
2. Créer un fichier `index.html` avec la base de votre HTML.
3. Installer `parcel`
4. Créer une feuille de style `src/style/style.css` et ajouter la balise link dans le `index.html`
5. Créer le script principal `src/index.js` et ajouter le à la fin de la balise `<body>`

> Vous pouvez lancer parcel avec `npx parcel index.html`. Cela vas démarrer un serveur de dévloppement, cliqué sur l'url pour accéder à votre application :).

## La recherche de coktail

L'objectif de cette partie est d'afficher une barre de recherche et lorsque l'on lance un recherche en appuyant sur la loupe, alors les coktails doivent s'afficher en bas de la barre de recherche

> Ne faite que le design pour des téléphones

## Le detail du coktail

Lors du clique sur un coktail afficher dans une modale ou un panneau lattéral le detail du coktail.

### Quelques liens utiles

- Les polices d'écriture sont sur google font : `lobster` pour le titre et `poppins`
- Les icônes utilise [font-awesome](https://fontawesome.com/icons/magnifying-glass?s=solid&f=classic), vous facilement le rajouter dans votre page html avec la balise link suivante :

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
  integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
```

> Pour styliser un icone, faite comme si c'était du text.

> Soyez créatif, un design vous proposé mais vous pouvez très bien en faire un autre ! Pour ceux qui cherche un jolie design, inspirez vous des design existant et sinon il y a un très bon site de génération de couleurs : https://coolors.co/a09ebb-a8aec1-b5d2cb-bfffbc-a6ffa1

> Vous pouvez si vous le souhaitez créer autant de modules javascript de votre choix, autant de fonction que vous souhaitez !

> Si jamais vous êtes bloqué, n'hésitez pas à faire appel au formateur !
