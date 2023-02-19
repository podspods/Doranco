console.log(" ********** JS loaded ****************");



function openOverlay(){

  console.log("openOverlay");
  const overlay = document.querySelector('.volet');
  overlay.classList.remove('disable');
  overlay.classList.add('enable');

  const information = document.querySelector('.information');
  information.classList.remove('enable');
  information.classList.add('disable');
}


function closeOverlay(){
  console.log("closeOverlay");
  const overlay = document.querySelector('.volet');
  overlay.classList.remove('enable');
  overlay.classList.add('disable');

  const information = document.querySelector('.information');
  information.classList.remove('disable');
  information.classList.add('enable');
}

closeOverlay();
// open overlay on clikc
document
  .querySelector('.information')
  .addEventListener('click', openOverlay);


  document
  .querySelector('.volet')
  .addEventListener('click', closeOverlay);
