/**
 * Search for cocktails using an api and fetch
 */
export async function searchForCocktails({
  searchInput,
  container,
  onCocktailClick,
}) {
  // Retrieve the search value
  const search = searchInput.value

  // If there is no search
  if (!search) {
    // Stop now!
    return
  }

  // Cocktails http request to retrieve the data
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`,
  )

  // We get the data as a javascript objet
  const data = await response.json()

  // Retrieving drinks
  const drinks = data.drinks

  // Empty the search container
  container.innerHTML = ''

  // Cokctails looping
  for (const drink of drinks) {
    // MAking the cocktail thumbnail
    const div = createCocktail(drink.strDrink, drink.strDrinkThumb)
    // We add the cocktail thumb into the listing
    container.append(div)

    // Binding the click on the cocktail and triggering a function
    div.addEventListener('click', () => onCocktailClick(drink))
  }
}

/**
 * Making a cocktail thumbnail
 */
export function createCocktail(nom, image) {
  const root = document.createElement('div')
  root.classList.add('cocktail')

  const imgContainer = document.createElement('div')
  imgContainer.classList.add('img-container')

  const detail = document.createElement('div')
  detail.classList.add('detail')

  const img = document.createElement('img')
  img.setAttribute('alt', nom)
  img.setAttribute('src', image)

  const p = document.createElement('p')
  p.innerText = nom

  // Assembling all elements together
  root.append(imgContainer)
  root.append(detail)
  imgContainer.append(img)
  detail.append(p)

  return root
}

/**
 * Initialize the cocktail search events
 */
export function initCocktailSearch({
  searchInput,
  container,
  onCocktailClick = () => null,
}) {
  searchInput.addEventListener('keyup', () => {
    searchForCocktails({
      searchInput,
      container,
      onCocktailClick,
    })
  })
}
