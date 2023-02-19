console.log("pizza")
/*
Dans cet exercice nous allons manipuler les promesses et l'asynchrone
en developpant un faux restaurant italien !

Voici deux variables :
La nombre de couvert disponible
Le nombre de couvert maximum
*/
let couverts = 100;
let couvertsSale = 0;
let finService = false;

// const couvertsMax = 100;

const pizzaCouvert = 1;
const pastaCouvert = 3;
const lasagneCouvert = 6;
const pizzaDelai = 2000;
const pastaDelai = 4000;
const lasagneDelai = 6000;
const vaisselleDelai = 500;
const delaiCourt = 400;
let listePlat = [];

//let listTache= array();
const platList={
  "pizza" : { couvert : pizzaCouvert, duree: pizzaDelai},
  "pasta" : { couvert : pastaCouvert, duree: pastaDelai},
  "lasagne" : { couvert : lasagneCouvert, duree: lasagneDelai},
}




function attendre(nbMs=1000){
  return  myPromise = new Promise((resolve) => {

  // J'utilise setTimeout  afin d'attendre 3 secondes
    window.setTimeout(() => {
    resolve();
    }, nbMs)
  });
 
}


//console.log('debut')
//attendre(2000).then (()=>console.log('fin'))


/*
Exercice 2 :
------------

Créer une fonction asynchrone « pizza » qui accepte 1 paramètre :

- nomPizza (string) : Le nom de la pizza

1. Si il n'y a pas 1 couvert de disponible, lever une erreur en utilisant :
   - throw new Error(`Pas assez de couvert pour la pizza ${nomPizza} !`)
   
2. Retirer 1 couvert !

3. Dans cette fonction affiché dans le console "Préparation de la pizza ${nomPizza} ..."

4. En utilisant la fonction « attendre » et le mot clefs `await`, attendre 2 secondes

5. Afficher dans la console « Pizza ${nomPizza} prête ! »

*/

async function  pizza (nomPizza)
{
  
  if (couverts < pizzaCouvert){
    throw new Error(`Pas assez de couvert pour la pizza ${nomPizza} !`)

  }else{
  
    couverts -=pizzaCouvert;
    couvertsSale+=pizzaCouvert;
    console.log(`Préparation de la pizza ${nomPizza} ...`);
    await attendre(pizzaDelai);
    
  }
  return nomPizza;
  
}





/*
Exercice 3 :
------------

Créer une fonction asynchrone « pasta » qui accepte 1 paramètre :

- nomPasta (string) : Le nom des pâtes

1. Si il n'y a pas 3 couverts de disponible, lever une erreur en utilisant :
   - throw new Error(`Pas assez de couvert pour les pâtes ${nomPasta} !`)
   
2. Retirer 3 couvert !

3. Dans cette fonction affiché dans le console "Préparation des pastas ${nomPasta} ..."

4. En utilisant la fonction « attendre » et le mot clefs `await`, attendre 4 secondes

5. Afficher dans la console « Pasta ${nomPasta} prête ! »

*/

// réponse --> plutot de faire fonction plat à chaque fois, je fais une fonction cuisine qui accepte plat comme paramettre


async function  cuisiner (plat,nom)
{
  const myPlat=platList[plat]

  if (couverts < myPlat.couvert){
    throw new Error(`Pas assez de couvert pour le plat ${plat}  ${nom} !`)
  }else{
    couverts -=myPlat.couvert
    couvertsSale+=myPlat.couvert;

    console.log(`Préparation du plat  ${plat}  ${nom} cvs ${couvertsSale} cv ${couverts}...`)
    await attendre(myPlat.duree);
  }
  return `${plat}  ${nom}`;
 
}

const couvertsMax = 6;
couverts=2;


// const cuisinerPromise = cuisiner ("pasta", "Bolognaise")

// cuisinerPromise.catch((error) => {   console.log( `error : ${error}`);


cuisiner("lasagne", "Bolognaise")
.catch((e) => {
console.log (`*****catch****** ${e}`); // à la moindre erreur on attend la vaiselle et on relance la pizza
attendre(300).then(() => cuisiner("pasta", "Bolognaise"));

})

// cuisiner("lasagne", "Bolognaise")
// .catch((e) =>  attendre(500).then(() => cuisiner("pasta", "Bolognaise")) // à la moindre erreur on attend la vaiselle et on relance la pizza
// )



// cuisinerPromise.then (nomPlat=>{ console.log(`plat ${nomPlat} prête ! vs ${couvertsSale} cv:${couverts}`);}) ;

// console.log(`fin vs ${couvertsSale} cv:${couverts}`);


//const myCooking =  cuisiner (platList["pasta],"bolognaise",) ;
//pastaPromise.then (()=>console.log(`pasta fini  couvert restant :${couverts}`));


/*
Exercice 4 :
------------

Créer une fonction asynchrone « lasagne » qui accepte 1 paramètre :

- nomLasagne (string) : Le nom des lasagnes

1. Si il n'y a pas 6 couverts de disponible, lever une erreur en utilisant :
   - throw new Error(`Pas assez de couvert pour les lasagnes ${nomLasagne} !`)
   
2. Retirer 6 couvert !

3. Dans cette fonction affiché dans le console "Préparation des lasagnes ${nomLasagne} ..."

4. En utilisant la fonction « attendre » et le mot clefs `await`, attendre 6 secondes

5. Afficher dans la console « Lasagne ${nomLasagne} prête ! »

*/

// réponse --> plutot de faire fonction plat à chaque fois, je fais une fonction cuisine qui accepte plat comme paramettre


// const lasagnePromise = cuisiner ("lasagne", "aux épinards")

// lasagnePromise.then (nomPlat=>{ console.log(`plat ${nomPlat} prête ! vs ${couvertsSale} cv:${couverts}`);}) ;

// console.log(`fin vs ${couvertsSale} cv:${couverts}`);


/*
Exercice 5 :
------------

Créer une fonction asynchrone « vaiselle » qui accepte 1 paramètre :

- nombreCouvert (number) : Le nombre de couvert que l'on souhaite laver
   
3. Dans cette fonction affiché dans le console "Vaiselle de ${nombreCouvert} couvert(s) ..."

4. En utilisant la fonction « attendre » et le mot clefs `await`, attendre 0.5 secondes par couverts !

5. Ajouter au couverts le nombreCouvert

6. Afficher dans la console « Fin de la vaisselle: ${couverts} ! »

*/


async function  vaisselle ()
{

  while (!finService){

  
    if (couvertsSale<=0){   // plus rien à laver
      console.log(`Plus de couvert sales : vs ${couvertsSale} cv:${couverts} !`);
      await attendre(delaiCourt);  //attendre et faire la vaisselle

    }

    couvertsSale-=1;
    await attendre(vaisselleDelai);
    console.log(` 1 couvert de lavé cvs ${couvertsSale} cv:${couverts} !`);
    couverts +=1;

    if (couverts >= couvertsMax){
      console.log(`tout est propre: vs ${couvertsSale} cv:${couverts} !`);
      await attendre(delaiCourt);//attendre et faire la vaisselle
    }
  }  
    
}



//-------------------------- test -------------------------------------------

/*
Exercice 6 :
------------

Créer une fonction asynchrone « demarrerService » :

1. En utilisant Promise.all, Dans cette fonction lancer en parraléle : 
     - 20 pizzas
     - 15 pasta
     - 10 lasagne
     
2. Attendre que tout le service soit terminé et afficher dans la console
   "Service Terminé !!!"
   
BONUS : N'oublier pas de faire la vaiselle ...
*/

// myPizzaList=[["margarita", 2],["4 fromages", 4],["pépéronie", 5],["océanne", 5],["napolitaine", 3]]
// myPastaList=[["pasta 1", 10],["pasta 2", 2],["pasta 3", 1],["pasta 4", 1],["pasta 5", 1]]
// myLasagneList=[["Lasagne 1", 2],["Lasagne 2", 4],["Lasagne 3", 1],["Lasagne 4", 1],["Lasagne 5", 2]]

const service={
  "pizza" : [["margarita", 2],["4 fromages", 4],["pépéronie", 5],["océanne", 5],["napolitaine", 3]],
  "pasta" : [["bolognaise", 10],["corbonara", 2],["saumon 3", 1],["nature 4", 1],["epinard 5", 1]],
  "lasagne" : [["Standard", 2],["Tomate", 4],["4 saisons", 1],["parmesan", 1],["aux oeufs", 2]],
}



async function faireService(){
  vaisselle ();
  for (let recette in service){
    const listePlat = service[recette];

    for (let plat of listePlat ){
      for (let index = 1 ; index<= plat[1]; index++){
        console.log(`qte plat : ${plat}`);
        listePlat.push( 
                cuisiner (recette, `${plat[0]}-${index}`)
                  .catch ((e)=>attendre(delaiCourt).then(()=>cuisiner (recette, `${plat[0]}-${index}`))
                  ));

        // cuisinerPromise.then (nomPlat=>{ console.log(`plat ${nomPlat} prête ! vs ${couvertsSale} cv:${couverts}`);}) ;
      }
    }
  }
}

/*
console.log(`début de service : cvs ${couvertsSale} cv:${couverts}`);
faireService()


Promise.all(listePlat);
finService = true;

console.log(`fin de service : cvs ${couvertsSale} cv:${couverts}`);
*/


//-------------------------------------------------------------

/**
 * en cas de manque de couvert => catch + retry tant que pas assez de couvert
 * 
 * faire la vaisselle tant que couvert sale et !finService
 * 
 * 
 */