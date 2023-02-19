/*
Le caroussel de chien :)
*/

/*
Afficher l'image de chien

1. Créer une fonction asynchrone "fetchDog"
2. dans cette fonction, utiliser fetch sur l'url suivante : https://dog.ceo/api/breeds/image/random
3. Convertissez la réponse en objet javascript en utilise `response.json` (cela doit retourner un objet json, avec une clef "message" contenant le lien vers l'image du chien)
4. Créer une balise img avec l'attribut src égale à l'url du chien obtenue précédement
6. Insérer l'image dans la div
*/


const myUrl = "https://dog.ceo/api/breeds/image/random"

let imgList=[]; // liste de stockage des images load 
let index = 0;  // index du tableau
/**
 * cette fonction permet d'aller chercher une image en async
 * au retour, l'url de l'image est mis dans un img et dans la imgList 
 * @returns   url de la photo
 * 
 * attention c'est une fonction async
 * 
 * 
 */

async function fetchDog (){

    const response = await fetch(myUrl)

    const data = await response.json()

    dogUrl = data.message

    const newImg = document.createElement("img");
    newImg.className = 'dog'
    const myDiv = document.querySelector('div.img-container');
    newImg.setAttribute("src",dogUrl);
    newImg.setAttribute("alt",`dog Url texte alternative $[dogUrl`);

    myDiv.replaceChildren(newImg);

    imgList.push(newImg);
    index = imgList.length-1;
     
    return dogUrl; 
}

/**
 * cette fonction permet de charge une image dans element
 * si l'élément existe il est remplacé
 * @param {
 * 
 * } index 
 * l'index correspond à  l'index dans un table contenant 0 ou plusieurs images
 */

function loadImage(index){
    const myImg =imgList[index];
    const myDiv = document.querySelector('div.img-container');
    myDiv.replaceChildren(myImg);
    
}

/**
 * cette fonction permet de gérer l'index du tableau d'image
 * en cas de valeur <index min  revient à la fin (index max)
 * 
 * 
 */

function previousIndex(){
    console.log(`loadImagePrevious ${index}`);
    index-=1 ;
    if (index <0){
        index = imgList.length-1
    }
    loadImage(index);
}
/**
 * cette fonction permet de gérer l'index du tableau d'image en incrémentation
 * * en cas de valeur > l'index max on va chercher une nouvelle image
 * 
 */

 
 
function nextIndex(){
    console.log(`loadImageNext ${index} ${imgList.length}`);
    index+=1;
    if (index >= imgList.length){
        fetchDog();
    }else{
        loadImage(index);
    }
}

/*
Lancer cette fonction lors du clique sur le bouton "suivant" et aussi "précédent"
*/

/**
 * ici on arme deux ecoutes sur l'evenement click
 * du bouton précedent et suivant
 * 
 */
const myButtonNext = document.querySelector('button.next');
myButtonNext.addEventListener("click", nextIndex )

const myButtonPrevious = document.querySelector('button.previous');
myButtonPrevious.addEventListener("click", previousIndex )

/*
Lancer la fonction lorsque le document est prêt

*/

// On lance la fonction lors de l'affichage de la page :)
document.addEventListener("DOMContentLoaded", fetchDog);


 /**
  * amélioration : mettre de miniature sur suivant et précedent 
  * 
  * 
  */