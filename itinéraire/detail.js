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

function $_GET(param) {
    var vars = {};
    window.location.href.replace(location.hash, '').replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function (m, key, value) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if (param) {
        return vars[param] ? vars[param] : null;
    }
    return vars;
}

fetch("http://51.137.57.127:1337/api/details?populate=*")
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

        numEtape = $_GET('detail');

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
                    .setContent("<h3>" + etape.attributes.etape.toString() + "</h3>")
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
            if (etape.id == numEtape) {
                var el = L.control.elevation();
                el.addTo(map);
                var g = new L.GPX(liengpx[i], { async: true });
                g.on("addline", function (e) {
                    e.line.options.color = "#e5b9d5";
                    el.addData(e.line);
                });
            }
            i++;
        }

        let eltEtape = document.querySelector('div.etapes');

        article = value.data[numEtape - 1];

        console.log(value.data);
        let eltRetour = document.createElement('div');
        eltEtape.appendChild(eltRetour);
        eltRetour.classList.add('retour');

        let eltFlecheContenu = document.createElement('a');
        eltRetour.appendChild(eltFlecheContenu);
        eltFlecheContenu.classList.add('fleche_contenu');
        eltFlecheContenu.href = "#";

        let eltFleche = document.createElement('img');
        eltFlecheContenu.appendChild(eltFleche);
        eltFleche.classList.add('fleche');
        eltFleche.src = url + article.attributes.fleche.data.attributes.formats.thumbnail.url;

        let eltChemin = document.createElement('h3');
        eltRetour.appendChild(eltChemin);
        eltChemin.classList.add('chemin');
        eltChemin.innerText = article.attributes.etape;

        let eltTheme = document.createElement('h2');
        eltEtape.appendChild(eltTheme);
        eltTheme.classList.add('theme');
        eltTheme.innerText = article.attributes.theme;

        let eltInfos = document.createElement('div');
        eltEtape.appendChild(eltInfos);
        eltInfos.classList.add('infos');

        let eltDistance = document.createElement('p');
        eltInfos.appendChild(eltDistance);
        eltDistance.classList.add('distance');
        eltDistance.innerText = article.attributes.distance;

        let eltImageDistance = document.createElement('img');
        eltInfos.appendChild(eltImageDistance);
        eltImageDistance.classList.add('infos_img');
        eltImageDistance.src = url + article.attributes.distance_img.data.attributes.formats.thumbnail.url;

        let eltTemps = document.createElement('p');
        eltInfos.appendChild(eltTemps);
        eltTemps.classList.add('temps');
        eltTemps.innerText = article.attributes.temps;

        let eltImageTemps = document.createElement('img');
        eltInfos.appendChild(eltImageTemps);
        eltImageTemps.classList.add('infos_img');
        eltImageTemps.src = url + article.attributes.temps_img.data.attributes.formats.thumbnail.url;

        let eltNiveau = document.createElement('p');
        eltInfos.appendChild(eltNiveau);
        eltNiveau.classList.add('niveau');
        eltNiveau.innerText = article.attributes.level;

        let eltImage = document.createElement('img');
        eltEtape.appendChild(eltImage);
        eltImage.classList.add('photo');
        eltImage.src = url + article.attributes.image.data.attributes.formats.medium.url;

        let eltDepartArrivee = document.createElement('div');
        eltEtape.appendChild(eltDepartArrivee);
        eltDepartArrivee.classList.add('depart_arrivee');

        let eltDepart = document.createElement('p');
        eltDepartArrivee.appendChild(eltDepart);
        eltDepart.classList.add('depart');
        eltDepart.innerText = article.attributes.depart;

        let eltArrivee = document.createElement('p');
        eltDepartArrivee.appendChild(eltArrivee);
        eltArrivee.classList.add('arrivee');
        eltArrivee.innerText = article.attributes.arrivee;

        let eltDescription = document.createElement('p');
        eltEtape.appendChild(eltDescription);
        eltDescription.classList.add('description')
        eltDescription.innerText = article.attributes.descriptif;

        eltEtape.appendChild(document.querySelector('.elevation'));

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

    )
    .catch(function (err) {

    });