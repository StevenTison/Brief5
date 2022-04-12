const url = "http://51.137.57.127:1337";
const apiNews = "/api/news/";
const img = "?populate=*";

function printNews(data) {
    let main = document.querySelector("main");
    main.classList.add("boite")
    let eltdiv = document.createElement("div")
    main.appendChild(eltdiv)
    for (let article of data.data) {
        let eltarticle = document.createElement("article");
        eltdiv.classList.add("grille")
        eltdiv.appendChild(eltarticle);
        let eltlink = document.createElement('a');
        eltarticle.appendChild(eltlink);
        eltlink.classList.add('lien_article');
        eltlink.innerText = article.attributes.titre
        eltlink.href = "#";

        
      
        // let titre = document.createElement("h1");
        // titre.innerText = article.attributes.titre;
        // eltarticle.appendChild(titre)

      
        let image = document.createElement("img")
        eltarticle.appendChild(image)
        image.setAttribute("src", url + article.attributes.illustration.data[0].attributes.formats.small.url);
        eltarticle.appendChild(image);

    }


}

function getNews() {
    fetch(url + apiNews + img)
        .then(response => response.json())
        .then(response => printNews(response))
        .catch(error => alert("erreur : " + error));
}
getNews();



