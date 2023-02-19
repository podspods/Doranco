
const cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php"

// ------------------------------------------------------------------------------------------------------
/***
 * this fonction create the spash (home page))
 * 
 */

function addLogo(){

	const myLogo= document.querySelector('.logo') 

	if (myLogo ===null){
		const myLogo = document.createElement("div");
		myLogo.classList.add("logo");
		const myLogoTitle = document.createElement("h1");
		myLogoTitle.innerHTML = "Cocktail<br>Search";
		myLogo.replaceChildren(myLogoTitle)
		const MysearchAndLogo = document.querySelector('.searchAndLogo');
		MysearchAndLogo.replaceChildren(myLogo)

	}
}
// ------------------------------------------------------------------------------------------------------
/**
 * add div contain logo and search bar
 * 
 */
function addDivSearchAndLogo(){

	const myLogoContainer= document.querySelector('.searchAndLogo') 

	if (myLogoContainer ===null){
		const myLogoContainer = document.createElement("div");
		myLogoContainer.classList.add("searchAndLogo");
		const myMainContainer = document.querySelector('.mainContainer');
		myMainContainer.replaceChildren(myLogoContainer)
	}

}
// ------------------------------------------------------------------------------------------------------
/**
 * add the main container 
 * attach to the body
 *  
 */

function addMainContainer(){

	const myMainContainer= document.querySelector('.mainContainer') 
	if (myMainContainer ===null){
		const myNewMainContainer = document.createElement("div");
		myNewMainContainer.classList.add("mainContainer");
		const myBody = document.querySelector('body');
		myBody.replaceChildren(myNewMainContainer)

	}
}
// ------------------------------------------------------------------------------------------------------
/**
 * this fuction create a new image with url as src
 * @param {
 * } url : url of the image 
 * @returns  object img
 */
function createImage(drink){

	const newImg = document.createElement("img");
	newImg.className = 'cocktailImg'
	newImg.setAttribute("src",drink.strDrinkThumb);
	newImg.setAttribute("alt",`Cocktail ${drink.strDrink ??=""} ${drink.strCategory??=""} ${drink.strAlcoholic??=""} ${drink.strIngredient1??=""} `);
	return  newImg ;
}
// ------------------------------------------------------------------------------------------------------
/**
 * this fuction create a new title for drink 
 * @param {
* } url : url of the image 
* @returns  object img
*/
function createTitle(title){
	const newTitle = document.createElement("h1");
	newTitle.className = 'cocktailName';
	newTitle.innerText = title ;
	return  newTitle ;
}
// ------------------------------------------------------------------------------------------------------
/**
 * this fonction add a text in the cocktail tag for a drink
 * @param {
 * } text 
 * @returns  object p 
 */
function createTag(text){
	
	const newTag		 = document.createElement("p");
	newTag.classList.add('cocktailTag');
	text ??="" ;													// if text not null print text
	newTag.innerHTML = `<hr> ${text}` ;
	return  newTag ;
}
// ------------------------------------------------------------------------------------------------------
/** this function add the text beside the picture of the drink
* it's included a title and a tag fields 
*/
function addCocktailText(drink){
	const newTitle			= createTitle(drink.strDrink)
	const newTag 				= createTag(drink.strTags)
	const newCocktailDiv= document.createElement("div");
	
	newCocktailDiv.classList.add('cocktailText');
	newCocktailDiv.appendChild(newTitle);
	newCocktailDiv.appendChild(newTag);
	
	return newCocktailDiv
}
// ------------------------------------------------------------------------------------------------------
/**
 * this function add (append) 1 drink to the result div. 
 * and add listerner foreach drink identified par idDrink
 * @param {} drink 
 */
function addDrink(drink){

	const newImg 		= createImage(drink)
	const newDivText= addCocktailText(drink)
	

	const newcocktailDiv =  document.createElement("div");
	newcocktailDiv.classList.add("cocktail");
	newcocktailDiv.appendChild(newImg);
	newcocktailDiv.appendChild(newDivText);
	newcocktailDiv.addEventListener("click",()=>{		
						alert(`${drink.strDrink}\n${drink.strInstructions}`);
					} );

	if (document.documentElement.clientHeight < document.documentElement.scrollHeight ){

		// newcocktailDiv.setAttribute("style","display:none"); // do we have to print right now or to wait for scroll

	}

	const MyResult 	= document.querySelector('.result');
	MyResult.appendChild(newcocktailDiv);
}
// ------------------------------------------------------------------------------------------------------
/**
 * this fuction remove (if exist ) the result div (therefore all contents are removed)
 * and create a new result div and attach it to the main container
 */
function removeAllDrinks(){

	const newResultDiv =  document.createElement("div");
	newResultDiv.className = 'result';

	const myMainContainer = document.querySelector('.mainContainer');

	const oldResultDiv =  document.querySelector(".result");
	if (oldResultDiv !== null){
		myMainContainer.removeChild(oldResultDiv)

	}
	myMainContainer.appendChild(newResultDiv)
}
// ------------------------------------------------------------------------------------------------------
/**
 * this function fetch the data from de web site (url in const)
 * query string is defined by inputText
 * return data in json format 
 * convert data into object 
 * extract the fields drinks and set a drinkslist
 * remove (if exist) all drink on the page and set a new drink list
 */
async function searchCocktail(){

	const MysearchInput = document.querySelector('.searchBar');
	const value= MysearchInput.value

	const resquest = `${cocktailUrl}?s=${value}`
	const response = await fetch(resquest);

	const returnData = await response.json();
	const drinkList = returnData.drinks ;

	console.log(`drinkList : ${drinkList}`);
	console.log(drinkList);

	if (drinkList!==null){

		removeAllDrinks();

		for (const myDring of drinkList){

			addDrink(myDring);

		}
		const MyMainContainer = document.querySelector('.mainContainer');
		MyMainContainer.style.justifyContent ="space-between";
	}else{

		alert(`Désolé : pas de cocktail avec cette recherche : ${value}\nveuillez faire un autre choix`);
	}

}
// ------------------------------------------------------------------------------------------------------
/**
 * this function add to the DOM the searchBar bloc (inputText, button and Icon)
 * and set a listener for the button search
 */
function testEnter(event){
 	if (event.key === "Enter") {
		searchCocktail()
	}
}

// ------------------------------------------------------------------------------------------------------
/**
 * this function add to the DOM the searchBar bloc (inputText, button and Icon)
 * and set a listener for the button search
 */
function addSearchBar(){
	const mySearchBarDiv= document.querySelector('.searchBarDiv') 
	if (mySearchBarDiv ===null){
		const mySearchBarDiv 	= document.createElement("div");
		const mysearchAndLogo = document.querySelector('.searchAndLogo');
		const mySearchInput 	= document.createElement("input");
		const mySearchButton 	= document.createElement("button");
		const myIcon 					= document.createElement("i");


		mySearchBarDiv.classList.add("searchBarDiv");

		mySearchInput.classList.add("searchBar");
		mySearchInput.setAttribute("placeholder", "rechercher un cocktail");
		mySearchButton.classList.add( "searchButton");
		myIcon.classList.add( `fa-solid`,`fa-magnifying-glass`);
		mySearchButton.appendChild(myIcon);

		mySearchBarDiv.appendChild(mySearchInput);
		mySearchBarDiv.appendChild(mySearchButton);
		


		mysearchAndLogo.appendChild(mySearchBarDiv)
		mySearchButton.addEventListener('click', searchCocktail)	// click on button with magnifying glass
		mySearchInput.addEventListener('keydown', testEnter)			// keyboard enter equal to summit

		mySearchInput.focus();								// focus in the input in order to set search value (no need to click into the input)

	}		

}

// ------------------------------------------------------------------------------------------------------
/**
 * resize logo half of the splash 
 */
function resizeLogo(){

	const myLogo= document.querySelector('.logo'); 
//	myLogo.style.width = "70px";
//	myLogo.style.height = "70px";
myLogo.style.height = `${myLogo.clientHeight/2}px` ;
myLogo.style.width = `${myLogo.clientWidth/2}px` ;


	const myLogoText= document.querySelector('.logo h1'); 
	myLogoText.style.fontSize = "smaller";

}

// ------------------------------------------------------------------------------------------------------
/**
 * what to do when click on the logo : add the searchbar on the page 
 *  and resize logo (half of splash)
 * 
 */
function clickLogo(){
	const myLogo= document.querySelector('.logo');
	myLogo.removeEventListener('click', clickLogo);			// if click on the splash then change page to logo + search bar

	resizeLogo();
	addSearchBar();
}
// ------------------------------------------------------------------------------------------------------
/**
 * the function adapt the higth of the web site according to the size of the window
 * and the width
 */
function setScreenSize(){

	const myMainContainer= document.querySelector('.mainContainer');
	myMainContainer.style.height = `${window.innerHeight}px`
	myMainContainer.style.width = `${window.innerWidth}px`

}
// ------------------------------------------------------------------------------------------------------
function initPage(){

	addMainContainer()
	setScreenSize();
	window.onresize = setScreenSize; // if windows resize then resize mainContainer

	addDivSearchAndLogo()
	addLogo()
	const myLogo= document.querySelector('.logo')
	myLogo.addEventListener('click', clickLogo)			// if click on the splash then change page to logo + search bar
	 
}



document.addEventListener("DOMContentLoaded",initPage); 	// waiting for document loaded before code executing
