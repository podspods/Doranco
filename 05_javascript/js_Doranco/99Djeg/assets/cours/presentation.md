# Présentation de javascript

Javascript c'est un langage de programmation. Ce langage de programmation il est dit « multi-paradigm » (Il peut s'utiliser de plein de manière différente). Il esi diréctement installé dans votre navigateur ! Pas besoin d'installer javascipt.

Cependant, il éxiste aussi une version de javascript permattant de séxécuter en dehors du navigateur (diréctement sur la machine) c'est « nodejs ».

## Javascript et le DOM

Javascript est diréctement disponible sur tout les navigateurs du monde. Pour faire du javascript il éxiste plusieurs façons :

- Dans un fichier html, nous pouvons utiliser la balise `<script>` pour faire du javascript.
- Nous pouvons aussi séparer notre code javascript du html en spécifiant à notre balise `<script>` un lien vers un fichier javascript.
- Dans la console de l'inspécteur de votre navigateur !

Le javascript que l'on utilise dans un navigateur, n'est pas pas « tout seul » : il vient avec le DOM (Document Objet Modeling). Ce DOM permet à javascript d'interargir avec votre navigateur (ouvrir des onglets, faire un carousel d'images, déplier un menu ...)

> **Le DOM est uniquement présent sur votre navigateur, pas en nodejs !**

### Éxemples

Diréctement dans notre balise script :

```html
<!-- index.html -->
<html>
  <head>
    ...
  </head>
  <body>
    <h1>Ma Page</h1>
    <script>
      // Ici on met notre code javascrpit :
      console.log('coucou')
    </script>
  </body>
</html>
```

Dans un fichier séparé

```js
// mon-script.js
console.log('coucou')
```

```html
<!-- index.html -->
<html>
  <head>
    ...
  </head>
  <body>
    <h1>Ma Page</h1>
    <script src="./mon-script.js" />
  </body>
</html>
```

Dernièrement, vous pouvez ouvrir la console de votre inspécteur sur votre navigateur (Appuyer sur la touche F12 sur votre navigateur).

[Partie suivante : Les fendamentaux](./fondamentaux.md)
