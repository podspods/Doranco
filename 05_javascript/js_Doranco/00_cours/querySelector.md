# querySelector


## single

```html
<html>
  <head></head>
  <body>
    <div class="ma-1er-div">
      <p class="mon-paragraph">Coucou les amis</p>
      <p class="mon-paragraph">Coucou les amis</p>
      <p class="mon-paragraph">Coucou les amis</p>
    </div>
    <script src="./monscript.js">
  </body>
</html>
```

```js

const myP = document.querySelector('.ma-1er-div>p')

console.log (myP.innerText)

myP.innerText= "Pas coucou les autres myP"

```


## multiple

```js

const allParagraph = document.querySelectorAll('.ma-1er-div>p')

console.log (allParagraph.length)

for (myP of allParagraph )
  console.log (myP.innerText)

 allParagraph[1].innerText= "Pas coucou les autres"

`̀`̀ 
