/**
 * Display the search bar by toggling some css class
 */
export function displaySearchBar(splash, searchBar) {
  // Add mini class to the splash
  splash.classList.add('mini')
  // Add active class to the search bar
  searchBar.classList.add('active')

  // Delete the event on the splash
  splash.removeEventListener('click', displaySearchBar)
}

/**
 * Initialize splash screen events
 */
export function initSplash(splash, searchBar) {
  splash.addEventListener('click', () => {
    displaySearchBar(splash, searchBar)
  })
}
