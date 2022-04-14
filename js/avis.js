const url = 'http://51.137.57.127:1337';
const api = '/api/avis-temoignages/';

fetch("http://51.137.57.127:1337/api/avis-temoignages?populate=*")
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

        let eltAvisArticle = document.querySelector('.avis')
        for (let article of value.data) {
            let eltAvis = document.createElement('div');
            eltAvisArticle.appendChild(eltAvis);
            eltAvis.classList.add('Avis_article');
            eltAvis.href = '#'
            console.log(value.data);

            let eltNetoile = document.createElement('div');
            eltAvis.appendChild(eltNetoile);
            eltNetoile.classList.add('netoi');

            let eltNote = document.createElement('div');
            eltAvis.appendChild(eltNote);
            eltNote.classList.add('note');

            let eltLicorne = document.createElement('div');
            eltAvis.appendChild(eltLicorne);
            eltLicorne.classList.add('licorne');

            let eltBas = document.createElement('div');
            eltAvis.appendChild(eltBas);
            eltBas.classList.add('bas');

            let eltNom = document.createElement('p');
            eltNetoile.appendChild(eltNom);
            eltNom.innerText = article.attributes.nom;
            eltNom.classList.add('nom_avis');

            let eltDate = document.createElement('p')
            eltAvis.appendChild(eltDate);
            eltDate.innerText = article.attributes.date;
            eltDate.classList.add('date_avis');

            let eltLieux = document.createElement('p');
            eltAvis.appendChild(eltLieux);
            eltLieux.innerText = article.attributes.lieux;
            eltLieux.classList.add('lieux_avis');

            let eltSecurite = document.createElement('p');
            eltNote.appendChild(eltSecurite);
            eltSecurite.innerText = article.attributes.securite;
            eltSecurite.classList.add('securite_avis');

            let eltBalisage = document.createElement('p');
            eltNote.appendChild(eltBalisage);
            eltBalisage.innerText = article.attributes.balisage;
            eltBalisage.classList.add('balisage_avis');

            let eltInteret = document.createElement('p');
            eltNote.appendChild(eltInteret);
            eltInteret.innerText = article.attributes.interet;
            eltInteret.classList.add('interet_avis');

            let eltService = document.createElement('p');
            eltNote.appendChild(eltService);
            eltService.innerText = article.attributes.services;
            eltService.classList.add('service_avis');

            let eltTitre = document.createElement('h3');
            eltLicorne.appendChild(eltTitre);
            eltTitre.innerText = article.attributes.titre;
            eltTitre.classList.add('titre_avis');

            let eltReponse = document.createElement('p');
            eltBas.appendChild(eltReponse);
            eltReponse.innerText = article.attributes.reponse;
            eltReponse.classList.add('reponse_avis');

            let eltBouton = document.createElement('a');
            eltBas.appendChild(eltBouton);
            eltBouton.innerText = article.attributes.bonton_lire;
            eltBouton.href = '#';

            let eltCom = document.createElement('p');
            eltLicorne.appendChild(eltCom);
            eltCom.innerText = article.attributes.com;
            eltCom.classList.add('com_avis');

            let eltEtoile = document.createElement('img');
            eltNetoile.appendChild(eltEtoile);
            eltEtoile.src = url + article.attributes.etoile.data[0].attributes.url;
            eltEtoile.classList.add('etoile_avis');


        }

    })
    .catch(function (err) {

    });
