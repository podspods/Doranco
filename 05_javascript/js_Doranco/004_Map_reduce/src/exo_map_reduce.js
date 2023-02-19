/**
Avec la constante suivante :
*/
const notes = [12, 8, 9, 17, 6, 13, 20, 8,10,19.6];

/*
Créer une fonction nommé calculerMoyenne recevant un paramètre : un tableaux de number

Dans cette fonction utiliser la boucle de votre choix afin de calculer la moyenne,
La fonction doit retourner la moyenne.

Pour la calcule de moyenne :

addition de toutes les notes entre elles / par le nombre de notes
*/
function calculerMoyenne(tabNotes){
  let result = 0 ; 
  tabNotes.forEach((note)=>{
    result += note
  })
  return result / tabNotes.length 
  
}

// with reduce method (for fun)
function calculerMoyenne2(tabNotes){
  
  const total = tabNotes.reduce(
    
    ( accumulator,currentNote) =>accumulator+currentNote,0
  )
  
  return total / tabNotes.length 
}


/*
Utiliser console.log pour afficher la moyenne des notes
*/
console.log (`original : ${notes}`)
console.log (`moyenne : ${calculerMoyenne(notes)}`)
console.log (`moyenne with reduce : ${calculerMoyenne2(notes)}`)


/*
Créer une constante `notesAugmentees` contenant le tableaux de notes ou chaque
note à augmenter d'1 points ! (attention, la note ne peut pas dépasser 20)

Il vous faudra utiliser `map`
*/

const notesAugmentees = notes.map((note) =>{
  
  if (note + 1 <= 20)
    return note+1
  // else  c'est facultatif 

  return 20   // note max   
})

const notesAugmentees2 = notes.map((note) =>{
  
  return  (note + 1 <= 20) ? note + 1 : 20
})

/*
Utiliser console.log pour afficher les notesAugmentees
*/
console.log (`original : ${notes}`)
console.log (`notesAugmentees : ${notesAugmentees}`)             
console.log (`notesAugmentees2 : ${notesAugmentees2}`)             
/*
Créer une constante `notesFiltrees` contenant les notes du premier exercice uniquement au dessus de la moyenne 10

Il vous faudra utiliser `filter`
*/
const notesFiltrees = notes.filter(note => note >= 10)
         

/*
Utiliser console.log pour afficher les notesFiltrees
*/
console.log (`original : ${notes}`)
console.log (`notesFiltrees : ${notesFiltrees}`)    