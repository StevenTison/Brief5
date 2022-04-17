const url = 'http://51.137.57.127:1337';
const api = '/api/ventes/';

fetch("https://51.137.57.127:1337/api/ventes?populate=*")
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(value) {

        value.data.sort(function(a, b) {
            return a.id - b.id;
        });

        let n = 1

        for (let modif of value.data) {
            modif.id = n;
            n++;
        }

        let eltVenteArticle = document.querySelector('div#main-swip.swiper-wrapper');
        // contenant
        for (let article of value.data) {
            let eltVentes = document.createElement('div');
            eltVenteArticle.appendChild(eltVentes);
            eltVentes.classList.add('swiper-slide');
            eltVentes.href = "#"
            console.log(value.data);

            //top
            let eltDivTop = document.createElement('div.top')
            eltVentes.appendChild(eltDivTop);
            eltDivTop.classList.add('top')

            //bot
            let eltDivBot = document.createElement('div')
            eltVentes.appendChild(eltDivBot);
            eltDivBot.classList.add('bot');


            //background vente
            let eltImage = document.createElement("img")
            eltVentes.appendChild(eltImage)
            eltImage.src = url + article.attributes.backvente.data[0].attributes.url;
            eltImage.classList.add('img_article');

            //Prix
            let eltPrix = document.createElement("p");
            eltDivTop.appendChild(eltPrix)
            eltPrix.innerText = article.attributes.prix;
            eltPrix.classList.add('prix_article');

            //duree
            let eltDuree = document.createElement("p");
            eltDivTop.appendChild(eltDuree)
            eltDuree.innerText = article.attributes.duree;
            eltDuree.classList.add('duree_article');

            //Titre
            let eltTitre = document.createElement("h3");
            eltVentes.appendChild(eltTitre)
            eltTitre.innerText = article.attributes.titre
            eltTitre.classList.add('titre_article');

            // favoris
            let eltFavori = document.createElement("img")
            eltDivBot.appendChild(eltFavori)
            eltFavori.src = url + article.attributes.favoris.data[0].attributes.url;
            eltFavori.classList.add('favori_article');

            //logo
            let eltLogo = document.createElement("img")
            eltDivBot.appendChild(eltLogo)
            eltLogo.src = url + article.attributes.logo.data[0].attributes.url;
            eltLogo.classList.add('logo_article');
        }
    })
    .catch(function(err) {

    });