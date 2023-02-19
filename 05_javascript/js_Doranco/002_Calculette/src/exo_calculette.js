/*
Exercice de la calculatrice
*/

/*
En utilisant des fonctions compilé, créer 4 fonctions accéptant 2 paramètre (x, y) :

- additionner : Additionne les 2 paramètres
- soustraire : Soustrait les 2 paramètres
- diviser : Divise les 2 paramètres
- multiplier : multiplie les 2 paramètres
*/
//--------------------------------------------------------------

function additionner (x,y){
    const result = x + y 
    return result 
    
  }
  //--------------------------------------------------------------
  function soustraire (x,y){
    const result = x - y 
    return result 
    
  }
  //--------------------------------------------------------------
  function diviser (x,y){
    const result = x / y 
    return result 
    
  }
  //--------------------------------------------------------------
  function multiplier (x,y){
    const result = x * y 
    return result 
   
  }
  /*
  En utilisant console.log et les fonctions plus haut, afficher le résultat des calcules
  suivant :
  
  10 + 5
  11 - 4
  65 / 2
  20 * 10
  
  11 * 2 - 10
  64 - (54 * 2) + 10
  */
  console.log (`10 + 5 = ${additionner(10,5)}`)
  console.log (`11 - 4 = ${soustraire(11,4)}`)
  console.log (`65 / 2 = ${diviser(65,2)}`)
  console.log (`20 * 10 = ${multiplier(20,10)}`)
  
  console.log (`11 * 2 - 10 = ${soustraire(multiplier(11,2),10)}`)
  console.log (`64 - (54 * 2) + 10 = ${additionner( soustraire(64,multiplier(54,2) ),10 )}`)
  
  /*
  En utilisant des fonctions fléché (le plus contracté possible) accéptant 2 paramètre x et y, créer
  les fonctions suivante :
  
  - add : Additionne les 2 paramètres
  - sub : Soustrait les 2 paramètres
  - div : Divise les 2 paramètres
  - mul : Multiple les 2 paramètres
  */
  const add = (x, y) => x + y
  const sub = (x, y) => x - y
  const div = (x, y) => x / y
  const mul = (x, y) => x * y
  
  /*
  En utilisant console.log et les fonctions fléché plus hait, afficher le résultat des calcules
  suivant :
  
  10 + 5
  11 - 4
  65 / 2
  20 * 10
  
  11 * 2 - 10
  64 - (54 * 2) + 10
  */
  
  console.log (`10 + 5 = ${add(10,5)}`)
  console.log (`11 - 4 = ${sub(11,4)}`)
  console.log (`65 / 2 = ${div(65,2)}`)
  console.log (`20 * 10 = ${mul(20,10)}`)
  
  console.log (`11 * 2 - 10 = ${sub(mul(11,2),10)}`)
  console.log (`64 - (54 * 2) + 10 = ${add( sub(64,mul(54,2) ),10 )}`)
  