const url = 'http://51.137.57.127:1337';

fetch("http://51.137.57.127:1337/api/temoignages?populate=*")
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

        let eltTemoignagesAvis = document.querySelector('.temoignages_avis')
        for( let article of value.data) {
            let eltDivTemoin = document.createElement('div');
            eltTemoignagesAvis.appendChild(eltDivTemoin);
            eltDivTemoin.classList.add('temoin');

            let eltLinkTemoin = document.createElement('a');
            eltDivTemoin.appendChild(eltLinkTemoin);
            eltLinkTemoin.classList.add('lien_temoin');
            eltLinkTemoin.href = "#";

            let eltImgTemoignages = document.createElement('img');
            eltLinkTemoin.appendChild(eltImgTemoignages);
            eltImgTemoignages.classList.add('image_temoignages');
            eltImgTemoignages.src = url + article.attributes.photo_temoignage.data.attributes.formats.small.url;

            let eltTitreTemoignages = document.createElement('p');
            eltLinkTemoin.appendChild(eltTitreTemoignages);
            eltTitreTemoignages.classList.add('titre_temoignages');
            eltTitreTemoignages.innerText = article.attributes.titre   
        }

    })
    .catch (function(err) {

});