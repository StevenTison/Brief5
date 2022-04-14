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
        for( let article of value.data) {
            let eltAvis = document.createElement('div');
            eltAvisArticle.appendChild(eltAvis);
            eltAvis.classList.add('Avis_article');
            eltAvis.href ='#'
            console.log(value.data);

            let eltNom = document.createElement('p');
            eltAvis.appendChild(eltNom);
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
            eltAvis.appendChild(eltSecurite);
            eltSecurite.innerText = article.attributes.securite;
            eltSecurite.classList.add('securite_avis');

            let eltBalisage = document.createElement('p');
            eltAvis.appendChild(eltBalisage);
            eltBalisage.innerText = article.attributes.balisage;
            eltBalisage.classList.add('balisage_avis');

            let eltInteret = document.createElement('p');
            eltAvis.appendChild(eltInteret);
            eltInteret.innerText = article.attributes.interet;
            eltInteret.classList.add('interet_avis');

            let eltService = document.createElement('p');
            eltAvis.appendChild(eltService);
            eltService.innerText = article.attributes.services;
            eltService.classList.add('service_avis');

            let eltTitre = document.createElement('h3');
            eltAvis.appendChild(eltTitre);
            eltTitre.innerText = article.attributes.titre;
            eltTitre.classList.add('titre_avis');

            let eltReponse = document.createElement('p');
            eltAvis.appendChild(eltReponse);
            eltReponse.innerText = article.attributes.reponse;
            eltReponse.classList.add('reponse_avis');

            let eltBouton = document.createElement('a');
            eltAvis.appendChild(eltBouton);
            eltBouton.innerText = article.attributes.bonton_lire;
            eltBouton.href = '#';

            let eltCom = document.createElement('p');
            eltAvis.appendChild(eltCom);
            eltCom.innerText = article.attributes.com;
            eltCom.classList.add('com_avis');


        }

    })
    .catch (function(err) {

});
