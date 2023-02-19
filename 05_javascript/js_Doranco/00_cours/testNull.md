# [Coercion](https://codepen.io/emile-cda/pen/QWBrPBz?editors=0011)
## test: si une variable est null alors lui attribuer une valeur par défaut

```js
const valeurParDefaut = "pas null"
//const valeurNull = null
const valeurNull = "ziczag"

const result = valeurNull ?? valeurParDefaut

console.log (`result : [${result}]` )

```


## test ternaire

```js

  const valeurParDefaut = "valeur par defaut"
  const valeurNull = null
  //const valeurNull = "bonne valeur pas null"

  const result = valeurNull === null ? valeurParDefaut:valeurNull
  console.log (`Test ternaire  : [${result}]` )


```
