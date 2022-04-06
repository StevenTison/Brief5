var map = L.map('map').setView([50.79067, 2.24964], 9);
L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png', {
    attribution: 'Map data &copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 20,
    id: 'mapbox/streets-v11',
    tileSize: 256,
    zoomOffset: 0,
    accessToken: 'pk.eyJ1Ijoic3RldmVudGlzb24iLCJhIjoiY2wxbHozeDRkMDFuOTNqcWpzNm5iMzhzayJ9.JrDbT9YA_SY9TYbtdoJzhw'
}).addTo(map);

var etapeUn = '/coordinate/calais-ardres.gpx' // URL to your GPX file or the GPX itself
new L.GPX(etapeUn, { async: true }).on('loaded', function (e) {
    map.fitBounds(e.target.getBounds())
}).addTo(map);

var etapeDeux = '/coordinate/ardres-watten.gpx'; // URL to your GPX file or the GPX itself
new L.GPX(etapeDeux, { async: true }).on('loaded', function (e) {
    map.fitBounds(e.target.getBounds());
}).addTo(map);

var etapeTrois = '/coordinate/watten-st-omer.gpx'; // URL to your GPX file or the GPX itself
new L.GPX(etapeTrois, { async: true }).on('loaded', function (e) {
    map.fitBounds(e.target.getBounds());
}).addTo(map);

var etapeQuatre = '/coordinate/st-omer-aire-sur-la-lys.gpx'; // URL to your GPX file or the GPX itself
new L.GPX(etapeQuatre, { async: true }).on('loaded', function (e) {
    map.fitBounds(e.target.getBounds());
}).addTo(map);

var etapeCinq = '/coordinate/aire-sur-la-lys-st-venant.gpx'; // URL to your GPX file or the GPX itself
new L.GPX(etapeCinq, { async: true }).on('loaded', function (e) {
    map.fitBounds(e.target.getBounds());
}).addTo(map);

var etapeSix = '/coordinate/st-venant-bethune.gpx'; // URL to your GPX file or the GPX itself
new L.GPX(etapeSix, { async: true }).on('loaded', function (e) {
    map.fitBounds(e.target.getBounds());
}).addTo(map);

var etapeSept = '/coordinate/bethunes-olhain.gpx'; // URL to your GPX file or the GPX itself
new L.GPX(etapeSept, { async: true }).on('loaded', function (e) {
    map.fitBounds(e.target.getBounds());
}).addTo(map);

var etapeHuit = '/coordinate/olhain-angres.gpx'; // URL to your GPX file or the GPX itself
new L.GPX(etapeHuit, { async: true }).on('loaded', function (e) {
    map.fitBounds(e.target.getBounds());
}).addTo(map);

var etapeNeuf = '/coordinate/angres-lens.gpx'; // URL to your GPX file or the GPX itself
new L.GPX(etapeNeuf, { async: true }).on('loaded', function (e) {
    map.fitBounds(e.target.getBounds());
}).addTo(map);

var etapeDix = '/coordinate/lens-don.gpx'; // URL to your GPX file or the GPX itself
new L.GPX(etapeDix, { async: true }).on('loaded', function (e) {
    map.fitBounds(e.target.getBounds());
}).addTo(map);

var etapeOnze = '/coordinate/don-lille.gpx'; // URL to your GPX file or the GPX itself
new L.GPX(etapeOnze, { async: true }).on('loaded', function (e) {
    map.fitBounds(e.target.getBounds());
}).addTo(map);

var etapeDouze = '/coordinate/lille-wattrelos.gpx'; // URL to your GPX file or the GPX itself
new L.GPX(etapeDouze, { async: true }).on('loaded', function (e) {
    map.fitBounds(e.target.getBounds());
}).addTo(map);

const url = 'http://20.229.68.151:1337';

fetch("http://20.229.68.151:1337/api/itineraires?populate=*")
    .then(function (res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function (value) {
        console.log(value);

        let eltEtape = document.querySelector('div.etapes');

        for (let article of value.data) {
            let eltLink = document.createElement('a');
            eltEtape.appendChild(eltLink);
            eltLink.classList.add('lien_article');
            eltLink.href = '#';

            let eltArticle = document.createElement('article');
            eltLink.appendChild(eltArticle);
            eltArticle.classList.add('itineraire')

            let eltDiv = document.createElement('div')
            eltArticle.appendChild(eltDiv);
            eltDiv.classList.add('box_photo');

            let eltImg = document.createElement('img');
            eltDiv.appendChild(eltImg);
            eltImg.classList.add('photo_paysage');
            eltImg.src = url + article.attributes.photo_paysage.data.attributes.formats.medium.url;

            let eltDistance = document.createElement('p');
            eltDiv.appendChild(eltDistance);
            eltDistance.classList.add('distance');
            eltDistance.innerText = article.attributes.distance;

            let eltDivDeux = document.createElement('div');
            eltArticle.appendChild(eltDivDeux);
            eltDivDeux.classList.add('box_contenu');

            let eltTheme = document.createElement('h3');
            eltDivDeux.appendChild(eltTheme);
            eltTheme.innerText = article.attributes.theme;

            let eltNiveau = document.createElement('p');
            eltDivDeux.appendChild(eltNiveau);
            eltNiveau.classList.add('level');
            eltNiveau.innerText = article.attributes.niveau;

            let eltTitre = document.createElement('h2');
            eltDivDeux.appendChild(eltTitre);
            eltTitre.innerText = article.attributes.titre;

            let eltDescription = document.createElement('p');
            eltDivDeux.appendChild(eltDescription);
            eltDescription.classList.add('descriptif');
            eltDescription.innerText = article.attributes.description;
        }
    }
    )
    .catch(function (err) {

    });