const url = "http://51.137.57.127:1337";
const apiNews = "/api/news/";
const img = "?populate=*";

function getParameterByName(param) {
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

function printNews(data){

    let main = document.querySelector("main");
    main.classList.add('lien_news');
    let article = data.data;


    let eltarticle = main.appendChild(document.createElement("article"));
    let titre = eltarticle.appendChild(document.createElement("h1"));
    titre.innerText = article.attributes.titre

    let illu = eltarticle.appendChild(document.createElement("img"))
    illu.setAttribute("src", url + article.attributes.illustration.data[0].attributes.formats.large.url);

    let contenu = eltarticle.appendChild(document.createElement("p"))
    contenu.innerText = article.attributes.contenu;

}



function getLien_news(){
    fetch(url + apiNews + getParameterByName("articleID") + img)
    .then(response => response.json())
    .then(response => printNews(response))
    .catch(error => alert("error : " + error));
}

getLien_news();
