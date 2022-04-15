
const apiNews = "/api/news/";
const img = "?populate=*";

function printNews(data) {
    let section = document.querySelector("section");
    section.classList.add("boite")
    let eltsection = document.createElement("section")
    section.appendChild(eltsection)
    

    data.data.sort(function (a, b) {
        return a.id - b.id;
    });

    let n = 1

    for (let modif of data.data) {
        modif.id = n;
        n++;
    }

    
  
    for (let article of data.data) {
        let eltarticle = document.createElement("article");
        eltsection.classList.add("grille")
        eltsection.appendChild(eltarticle);
        let eltlink = document.createElement('a');
        eltarticle.appendChild(eltlink);
        eltlink.classList.add('lien_article');
        eltlink.innerText = article.attributes.titre
        eltlink.href = ("/news/lien_news.html?articleID=" + article.id);

      
        let image = document.createElement("img")
        eltarticle.appendChild(image)
        image.setAttribute("src", url + article.attributes.illustration.data[0].attributes.formats.small.url);
        
    }


}

function getNews() {
    fetch(url + apiNews + img)
        .then(response => response.json())
        .then(response => printNews(response))
        .catch(error => alert("erreur : " + error));
}
getNews();



