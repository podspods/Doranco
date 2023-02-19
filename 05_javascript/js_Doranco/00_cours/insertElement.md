# [DOM Insert Update Delete  element](https://codepen.io/emile-cda/pen/oNMdQzV?editors=0011)


## create 
```html

  <div class="ma-1er-div">
      <p class="mon-paragraph">Coucou les amis 1</p>
      <p class="mon-paragraph">Coucou les amis 2</p>
      <p class="mon-paragraph">Coucou les amis 3 </p>
    </div>
```
  
### add at the end  
```js
const newP = document.createElement('p')
newP.innerText = "to append"
const myDiv = document.querySelector('.ma-1er-div')
myDiv.append (newP)

```
### add at the begining
```js
const newP = document.createElement('p')
newP.innerText = "to prepend"
const myDiv = document.querySelector('.ma-1er-div')
myDiv.prepend (newP)
```

## Insert 
### avant le père
```js
const newP = document.createElement('p')
newP.innerText = "beforebegin"
const myDiv = document.querySelector('.ma-1er-div')
myDiv.insertAdjacentElement('beforebegin',newP) // a l'extérieur avant
```
### après  le père
```js
const newP = document.createElement('p')
newP.innerText = "beforebegin"
const myDiv = document.querySelector('.ma-1er-div')
myDiv.insertAdjacentElement('afterend',newP) // a l'extérieur après
```


### Premier fils 
```js
const newP = document.createElement('p')
newP.innerText = "afterbegin"
const myDiv = document.querySelector('.ma-1er-div')
myDiv.insertAdjacentElement('afterbegin',newP) // Premier fils 
```
### Dernier fils 
```js
const newP = document.createElement('p')
newP.innerText = "beforeend"
const myDiv = document.querySelector('.ma-1er-div')
myDiv.insertAdjacentElement('beforeend',newP) // Premier fils 
```


## modify

### setAttribut
```js
// On récupére le premier paragraph
const myP = document.querySelector('.ma-1er-div p')
myP.setAttribute ('class', 'newClassFormyP')
```
### Modify text value
```js
const myP = document.querySelector('.ma-1er-div p')
myP.innerText = "My new text"  // Modify text value
```






## delete
  

```js

// On récupére le premier paragraph
const myP = document.querySelector('p')
myP.remove() // Suppreme la paragraph du HTML

```

