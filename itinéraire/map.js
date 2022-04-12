var map = L.map('map').setView([50.79067, 2.24964], 9);
L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png', {
    attribution: 'Map data &copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 20,
    id: 'mapbox/streets-v11',
    tileSize: 256,
    zoomOffset: 0,
    accessToken: 'pk.eyJ1Ijoic3RldmVudGlzb24iLCJhIjoiY2wxbHozeDRkMDFuOTNqcWpzNm5iMzhzayJ9.JrDbT9YA_SY9TYbtdoJzhw'
}).addTo(map);

var customOptions =
{
    'className': 'popupCustom'
}

const url = 'http://51.137.57.127:1337'
const api = '/api/itineraires/'


var liengpx = ['/coordinate/calais-ardres.gpx',
    '/coordinate/ardres-watten.gpx',
    '/coordinate/watten-st-omer.gpx',
    '/coordinate/st-omer-aire-sur-la-lys.gpx',
    '/coordinate/aire-sur-la-lys-st-venant.gpx',
    '/coordinate/st-venant-bethune.gpx',
    '/coordinate/bethunes-olhain.gpx',
    '/coordinate/olhain-angres.gpx',
    '/coordinate/angres-lens.gpx',
    '/coordinate/lens-don.gpx',
    '/coordinate/don-lille.gpx',
    '/coordinate/lille-wattrelos.gpx',];

fetch("http://51.137.57.127:1337/api/itineraires?populate=*")
    .then(function (res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function (value) {

        value.data.sort(function (a, b) {
            return a.id - b.id;
        });

        let n = 1

        for (let modif of value.data) {
            modif.id = n;
            n++;
        }

        let i = 0;
        let mapEtape = [];
        let popup = [];

        for (let etape of value.data) {
            popup[i] = L.popup(customOptions);
            mapEtape[i] = new L.GPX(liengpx[i], {
                polyline_options: {
                    color: '#e5b9d5',
                    weight: 8,
                    lineCap: 'round'
                }
            }).on('mouseover mousemove', function (e) {
                this.setStyle({
                    color: '#00246B'
                })
                popup[i - 1]
                    .setLatLng(e.latlng)
                    .setContent("<h3>" + etape.attributes.titre.toString() + "</h3>")
                    .openOn(map);
            }).on('mouseout', function (e) {
                map.closePopup();
                this.setStyle({
                    color: '#e5b9d5'
                })
            }).on('loaded', function (e) {
                map.fitBounds(e.target.getBounds());
            }).on('click', function (e) {
                document.location.href = 'detail.html?detail=' + etape.id;
            }).addTo(map);
            i++;
        }

        let d = 1;
        let eltEtape = document.querySelector('div.etapes');

        for (let article of value.data) {
            let eltLink = document.createElement('a');
            eltEtape.appendChild(eltLink);
            eltLink.classList.add('lien_article');
            eltLink.href = "detail.html?detail=" + article.id;

            d++;

            let eltArticle = document.createElement('article');
            eltLink.appendChild(eltArticle);
            eltArticle.classList.add('itineraire');

            let eltDiv = document.createElement('div');
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

            eltLink.addEventListener('mouseover', () => {
                mapEtape[article.id - 1].setStyle({
                    color: '#00246B'
                });
            });
            eltLink.addEventListener('mouseout', () => {
                mapEtape[article.id - 1].setStyle({
                    color: '#e5b9d5'
                });
            });
        }
    }
    )
    .catch(function (err) {

    });