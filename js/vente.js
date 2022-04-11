const url = 'http://51.137.57.127:1337'
const api = '/api/ventes/'

fetch("http://51.137.57.127:1337/api/ventes?populate=*")

let eltVentes = document.querySelector('div.ventes');

for ( let ventes ) {
    let eltVentes = document.createElement('a');
    eltEtape.appendChild(eltVentes);
    eltLink.classList.add('lien_article');
    eltLink.href = "#";