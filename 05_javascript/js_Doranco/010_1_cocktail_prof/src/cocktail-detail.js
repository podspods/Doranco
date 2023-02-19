/**
 * Open the overlay panel and the left panel and display the drink detail
 */
export function openOverlayPanel(drink, overlay) {
  // Display the overlay
  overlay.classList.remove('disable')
  overlay.classList.add('active')

  // We change the image
  const img = overlay.querySelector('.img-container img')
  img.setAttribute('alt', drink.strDrink)
  img.setAttribute('src', drink.strDrinkThumb)

  // The cocktail title
  const title = overlay.querySelector('h2')
  title.innerText = drink.strDrink

  // Clean the ingredient list
  const ul = overlay.querySelector('ul')
  ul.innerHTML = ''

  // Creating a 15 array length with inside all ingredients
  const ingredientList = Array.from({ length: 15 }, (v, i) => ({
    label: drink[`strIngredient${i + 1}`],
    measure: drink[`strMeasure${i + 1}`],
  }))

  // Looping on ingredients
  for (const ingredient of ingredientList) {
    // If there is no label
    if (!ingredient.label) {
      // Then get out of this place !
      break
    }

    // Making the li
    const li = document.createElement('li')
    // Changing text
    li.innerText = ingredient.label
    // Appending the li
    ul.append(li)

    // If there is no measure
    if (!ingredient.measure) {
      // Then go to the next ingredient
      continue
    }

    // Appending the measure
    li.innerText += ` (${ingredient.measure})`
  }

  // Display the cocktail instruction
  const instruction = document.querySelector('.overlay .instructions')
  instruction.innerText = drink.strInstructions
}

/**
 * Closing the overlay
 */
export function closeOverlay(overlay) {
  overlay.classList.remove('active')
  overlay.classList.add('disable')
}

/**
 * Initialize the overlay
 */
export function initOverlay(overlay) {
  overlay.querySelector('.close').addEventListener('click', () => {
    closeOverlay(overlay)
  })
}
