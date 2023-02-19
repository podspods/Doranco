import { initOverlay, openOverlayPanel } from './cocktail-detail'
import { initCocktailSearch } from './cocktail-search'
import { initSplash } from './splash-screen'

initSplash(
  document.querySelector('.splash-container'),
  document.querySelector('.search-bar'),
)

initCocktailSearch({
  searchInput: document.querySelector('#search'),
  container: document.querySelector('.cocktail-container'),
  onCocktailClick: drink =>
    openOverlayPanel(drink, document.querySelector('.overlay')),
})

initOverlay(document.querySelector('.overlay'))
