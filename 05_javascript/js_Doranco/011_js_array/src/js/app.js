console.log(" ********** JS loaded ****************");

// +x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x
// OBJECTS - In JavaScript, almost "everything" is an object.
// +x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x
// +-+-+-+-+-+-+-+-+-+-+-Multiple Arguments+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-








// +-+-+-+-+-+-+-+-+-+-+-++++++++++++++++++++++++-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

function arrayInit(){
  const annees = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
  const personArray = ["John", "Doe", 46];

  for (let an of annees)
    console.log(`an : ${an}`);

 for (let fiels of personArray)
    console.log(`fiels : ${fiels}`);
}




const mois ={ 
  mois1 : "janvier",
  mois2 : "février",
  mois3 : "mars",
  mois4 : "avril",
  mois5 : "mai",
  mois6 : "juin",
  mois7 : "juillet",
  mois8 : "aout",
  mois9 : "septembre",
  mois10 : "octobre",
  mois11 : "novembre",
  mois12 : "décembre",
}


const cars = new Array("Saab", "Volvo", "BMW");


console.log(mois.mois1);

console.log(cars);

document.querySelector(".my-p").innerHTML = cars;


 const personArray = ["John", "Doe", 46];
 const personObject = {firstName:"John", lastName:"Doe", age:46};



 console.log(cars.length);
 console.log(cars.keys());
 console.log(cars.sort());
 

 const fruits = ["Banana", "Orange", "Apple"];

 console.log(`fruits : ${fruits}` );

 fruits[6] = "Lemon"; // créate empty slot => length = 6 
 console.log(fruits);


// array avec clé valeur : devient un object mais reste un array 
// tous les défauts des deux=> a eviter
 const personObjet2 = [];
 personObjet2["firstName"] = "John";
personObjet2["lastName"] = "Doe";
personObjet2["age"] = 46;
console.log(personObjet2.length);     // Will return 0
console.log(personObjet2[0]); 




console.log(personObjet2)
console.log(personObject)




// creation d un array : les 2 méthodes sont valide  
const points1 = new Array();
const points2 = [];

// création et initialisation d'un array les deux méthodes sont valide 

const points3 = new Array(40, 100, 1, 5, 25, 10);
const points4 = [40, 100, 1, 5, 25, 10];



const points40 = new Array(40);  // creer un tableau de 4à cases vide (sans index ni valeur)
console.log(points40)


console.log(`points40 : ${points40}`)


for (let truc in points40 )
  console.log(`truc : ${truc}`)

  for (let truc of points40 )
  console.log(`truc : ${truc}`)

  points40.fill('a');

  console.log(points40)



  for (let truc in points40 )
  console.log(`truc in fill : ${truc}`)

  for (let truc of points40 )
  console.log(`truc of fill : ${truc}`)



  const fruitObj = Object.assign({}, fruits);


  console.log(fruits)
  console.log(fruitObj)