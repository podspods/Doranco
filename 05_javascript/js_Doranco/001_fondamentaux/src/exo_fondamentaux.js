/*
En utilisant la fonction console.log() pour afficher vos résultats (vos variables),
réaliser les exercices suivant

Exemple de console.log :
*/
const age = 42;
console.log(age);

/*
Exercice 1 :

Créer une constante : x égale au nombre 32
Créer une constante : y églae au nombre 10
Créer une constante : result égale au à laddition de x + y
Afficher dans le console la variable result
*/

const x = 32;
const y = 10;
const result = x+y;

console.log(result);


/*
Exercice 2 :

Créer une constante : z égale à la chaîne de caractére '10'
Créer une constante : w égale au nombre 4
Créer une constante : result2 égale à l'addition de z + w
Afficher dans le console la variable result2 et avec un commentaire expliquer le bug qui vient de se réaliser
*/


const z = "10";
const w = 4;
const result2 = z+w;

console.log(result2);


/*
Exercice 3 :

Créer une constante : firstname égale à 'John'
Créer une constante : lastname égale à 'Doe'
Afficher en utilisant la concatenation le nom suivie d'un espace suivie du prenom
Afficher en utilisant l'interpolation le nom suivie d'un espace suivie du prenom
*/


const firstname ='John' ;
const lastname ='Doe' ;

console.log(firstname + ' ' + lastname);
console.log(` ${firstname} ${lastname}`);

/*

Exercice 4 :

Créer une liste dans une constante notes avec les valeurs suivante :
10, 15, 8, 9, 16
Afficher dans la console le contenue de la liste
Afficher dans la console le 3eme élément de la liste
Afficher dans le console le dernier élément de la liste en utilisant « .length »
*/
const notes = [10, 15, 8, 9, 16] ;

console.log (notes);                      // contenue de la liste
console.log (notes[2]);                   // 3eme élément de la liste (2= 3-1)
console.log (notes[notes.length -1]);     // dernier élément de la liste en utilisant « .length »

/*
Exercice 5 :

Créer un objet dans une constante « student » contenant les champs suivant :

lastname = "Doe"
firstname = "John"
age = 34

En utilisant la console affiché l'objet student
Toujours en utilisant le console et l'interpolation afficher la phrase suivante :

"Bonjour éléve John Doe, vous avez 34 ans"

(En remplacant John, Doe et 34 par les variables)
*/

const student= {
  lastname : "Doe",
  firstname : "John",
  age : 34
}


console.log (student) ;
console.log (`Bonjour élève ${student.firstname} ${student.lastname}, vous avez ${student.age} ans`) ;


/*
Exercice 6 :

En utilisant le tableaux de notes de l'exercice 4, créer un objet dans une constante
« student2 » contenant tout les champs de « student » plus un champ « notes » contenant
les notes de l'exercie 4

Afficher dans le console ce « student2 »
Afficher dans la console la dernière note de « student2 »
Afficher dans le console la phrase suivante :

« Bonjour John Doe, vous avez 34 ans et votre dernière note est 16 »
*/

const student2 = {...student,notes} ;  // merge all fields from student and the array notes

console.log (student2);

console.log (student2.notes[student2.notes.length-1]);  // index start at 0, last index is array's lenght -1 

console.log (`Bonjour ${student2.firstname} ${student2.lastname} John Doe, vous avez ${student2.age} ans et votre dernière note est ${student2.notes[student2.notes.length-1]}`);
