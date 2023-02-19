# Fonction flèche 
## Syntaxe 
```ts
result = ([param] [, param]) => {
   instructions
}

```
exemple  1 avec plusieurs parametre
```js
// fonction flèche : fonction anonyme
const Fleche2Param =   ( var1, var2)=>{
   return var1+ var2 ;
 }

console.log(`Fleche2Param : ${Fleche2Param(3,2)}`)
```
exemple  2 avec 1 seul parametre
```js
// fonction flèche : fonction anonyme
const Fleche1Param =   ( var1)=>{
   return var1*10  ;
 }

console.log(`Fleche1Param : ${Fleche1Param(3,2)}`)
```
exemple  3 avec 1 seul parametre contracté
```js
// fonction flèche : fonction anonyme
const Fleche1ParamContracte =  var1 =>{
   return var1*10  ;
 }

console.log(`Fleche1ParamContracte : ${Fleche1ParamContracte(3)}`)
```

exemple 4 avec 0 parametre
```js
// fonction flèche : fonction anonyme
const Fleche0Param =  () =>{
   return 32  ;
 }

console.log(`Fleche0Param : ${Fleche0Param(3)}`)
```

exemple 5 avec 0 parametre et une instruction
```js
const Fleche0Param_1_instruction =  () =>   (42+2)*3  ;

console.log(`Fleche0Param_1_instruction : ${Fleche0Param_1_instruction()}`)
```


exemple 6  fonction flèche 1 parametre 1 instruction 
```js 

const fonctionFleche1param1instruction = param1 => param1 *2 ;

console.log(`fonctionFleche1param1instruction : ${fonctionFleche1param1instruction(3)}`)

```