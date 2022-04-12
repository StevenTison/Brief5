const url = 'http://51.137.57.127:1337';
const api = '/api/ventes/';

fetch("http://51.137.57.127:1337/api/ventes?populate=*");

let eltVenteArticle = document.querySelector('div.ventes');

for (let i = 0; i < 5; i++) {
    let eltVentes = document.createElement('a');
    eltVenteArticle.appendChild(eltVentes);
    eltVentes.classList.add('vente_article');
    eltVentes.href = "#"

    let eltPrix = document.createElement("p");
    eltPrix.appendChild(eltVenteArticle)
    eltPrix.innerText = url + vente.attributes.prix;
}