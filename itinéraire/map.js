var map = L.map('map').setView([50.79067, 2.24964], 9);
L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
    attribution: 'Map data &copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 12,
    id: 'mapbox/streets-v11',
    tileSize: 256,
    zoomOffset: 0,
    accessToken: 'pk.eyJ1Ijoic3RldmVudGlzb24iLCJhIjoiY2wxbHozeDRkMDFuOTNqcWpzNm5iMzhzayJ9.JrDbT9YA_SY9TYbtdoJzhw'
}).addTo(map);

var gpx = '/coordinate.gpx'; // URL to your GPX file or the GPX itself
new L.GPX(gpx, { async: true }).on('loaded', function (e) {
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
            let eltArticle = document.createElement('article')
            eltEtape.appendChild(eltArticle);
            eltArticle.classList.add('itineraire')

            let eltDiv = document.createElement('div')
            eltArticle.appendChild(eltDiv);
            eltDiv.classList.add('box_photo');

            let eltImg = document.createElement('img');
            eltDiv.appendChild(eltImg);
            eltImg.src = url + article.attributes.photo_paysage.data.attributes.formats.thumbnail.url;

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