# Les boucles

## boucle for of 
```js
// retreive each value of an object
const maTable = ['a','rta','123','mamaaa','truc','XIII','baba']
for (myVal of maTable) {
   console.log(`ma valeur : ${myVal}`);
}
```
## boucle for in 
```js
// retreive the index (key) of an object
const maTable = ['a','rta','123','mamaaa','truc','XIII','baba']
for (myIndex in maTable) {
   console.log(`ma valeur : ${maTable[myIndex]}`);
}
```

## boucle for
```js
debut = 0 
fin = 10 
for (let pas = debut; pas < fin; pas++) {
// compte de 0 à 9 

  console.log('Faire ' + pas + ' pas vers l\'est');
}
```

## boucle do while
```js
debut = 0 
fin = 10 
let pas = debut;
do {
  console.log('Faire ' + pas + ' pas vers l\'est');
  pas += 1;

} while (pas  < fin);
```

## boucle while
```js
debut = 0 
fin = 10 
let pas = debut;
while (pas < fin) {
  console.log('Faire ' + pas + ' pas vers l\'est');
  pas += 1;
}

```