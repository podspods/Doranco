# DOM : Modifier le document

Un élément posséde des enfant, parmis ces enfant il éxiste un type un peu particulier : `TextNode`.

Certains éléments (par éxemple une balise) possède du texte en tant qu'enfant.

Il est possible en utilisant `element.innerText` de manipuler de contenue textuel d'une balise

## innerText vs innerHTML

Pour changer on récupérer le contenu textuelle il faut utiliser `element.innerText` :

```js
// On récupére le premier paragraph
const p = document.querySelector('p')

console.log(p.innerText) // Affiche le text à l'intérieur du paragraph

// Change le contenue textuel
p.innerText = 'Comment ça va ?'
```

> **innerText** ne peux pas ajouter, enlever éditer ... Da la balise HTML ! Attention, je souhaite ajouter une balise `<strong>` à l'intérieur de mon paragraph je ne peux pas utiliser `innerText`

Pour changer le contenu **html** d'un élément, nous devons utiliser `element.innerHTML` :

```js
// On récupére le premier paragraph
const p = document.querySelector('p')

console.log(p.innerHTML) // Affiche le html à l'intérieur du paragraph

// Change le contenue html
p.innerHTML = 'Comment <strong>ça va</strong> ?'
```

## Supprimer un élément

Pour supprimer un élément de notre page HTML il suffit d'utiliser la fonction `element.remove()` :

```js
// On récupére le premier paragraph
const p = document.querySelector('p')

p.remove() // Suppreme la paragraph du HTML
```

## Créer de nouveau élément

Pour créer une nouvelle balise html en utilisant le DOM, on utilise la fonction `document.createElement` :

```js
// Créer une balise img. Le premier paramètre de createElement
// est le nom de la balise html souhaité
const img = document.createElement('img')
```

> Lorsque l'on utilise `document.createElement`, rien ne s'affiche à l'écran, il faudra placer le nouvelle élément dans la page html

Pour placer un élément dans une page html, plusieurs solution s'offre à nous :

- `element.append` : Ajoute un élément à la fin des enfants d'un autre élément
- `element.prepend` : Ajouter un élément au tout début des enfant d'un autre élément
- [`element.insertAdjacentElement`](https://developer.mozilla.org/fr/docs/Web/API/Element/insertAdjacentElement) : Permet d'insérer un élément au début, à la fin des enfant mais aussi à coté ou avant

```js
// On créé une nouvelle image
const img = document.createElement('img')

// On ajoute un attribut src
img.setAttribute('src', 'http://monimage.com')

// Je souhaiteris afficher mon image à l'intérieur de la
// div avec la classe "test1"
const div = document.querySelector('.test1')

// J'ajoute l'image à la suite des ses enfant
div.append(img)

// J'aoute l'image au début de ses enfant
div.prepend(img)

// Permet d'ajouter l'image dans plein d'endroit à la fois :
div.insertAdjacentElement('beforebegin', img) // Juste avant
div.insertAdjacentElement('afterbegin', img) // Au début des enfant
div.insertAdjacentElement('beforeend', img) // À la find des enfant
div.insertAdjacentElement(
  'afterend',
  img,
) // Juste après
``
```
