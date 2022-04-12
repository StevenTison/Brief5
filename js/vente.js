const url = 'http://51.137.57.127:1337';
const api = '/api/ventes/';

fetch("http://51.137.57.127:1337/api/ventes?populate=*")
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

        let eltVenteArticle = document.querySelector('div.ventes');

        for (let article of value.data) {
            let eltVentes = document.createElement('a');
            eltVenteArticle.appendChild(eltVentes);
            eltVentes.classList.add('vente_article');
            eltVentes.href = "#"
            console.log(value.data);

            let eltPrix = document.createElement("p");
            eltVenteArticle.appendChild(eltPrix)
            eltPrix.innerText = article.attributes.prix;
            eltPrix.classList.add('prix_article');

            let eltDuree = document.createElement("p");
            eltVenteArticle.appendChild(eltDuree)
            eltDuree.innerText = article.attributes.duree;
            eltDuree.classList.add('duree_article');

            let eltTitre = document.createElement("h3");
            eltVenteArticle.appendChild(eltTitre)
            eltTitre.innerText = article.attributes.titre
            eltTitre.classList.add('titre_article');

            let eltLogo = document.createElement("img")
            eltVenteArticle.appendChild(eltLogo)
            eltLogo.src = url + article.attributes.logo.data[0].attributes.url;
            eltLogo.classList.add('logo_article');

            eltImage = document.createElement("img")
            eltVenteArticle.appendChild(eltImage)
            eltImage.src = url + article.attributes.backvente.data[0].attributes.url;
            eltImage.classList.add('img_article');

        }
    })
    .catch(function(err) {

    });