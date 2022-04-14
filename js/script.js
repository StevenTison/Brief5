function toggleMenu() {
  const navbar = document.querySelector('.active');
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', (e) => {
    navbar.classList.toggle('show-nav');
  });
}
toggleMenu();

function toggleMap() {
  const change = document.querySelector('.switch');
  const etapes = document.querySelector('.etapes');
  const carte = document.querySelector('#map');
  change.addEventListener('click', (e) => {
    etapes.classList.toggle('show-etapes');
    carte.classList.toggle('show-map');
  });
}
toggleMap();