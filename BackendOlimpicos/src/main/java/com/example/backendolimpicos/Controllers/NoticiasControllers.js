let baseUrl = "http://localhost:8080";
let noticias = [];

function ObtenerNoticias(){
    fetch(baseUrl+'/noticias/all').then(res=>{
        res.json().then(json=>{
            noticias = json;
            ImprimirNoticias();
        });
    });
}
function ImprimirNoticias(){
    let contenedor = document.getElementById("news-section");

    noticias.forEach(noticia=>{
        contenedor.innerHTML+="";
    });

}

function MapearNoticia(noticia){
    return '<div class="news-card">\n' +
        '            <div class="news-image">\n' +
        '              <img src="../img/noticias-img/mariana_pajon.jpg" class="news-thumb" alt="">\n' +
        '              <a href="https://olympics.com/es/noticias/mariana-pajon-james-rodriguez-daniela-ospina-deporte-unirnos-amistad" target="_blank">\n' +
        '                <button class="card-btn">ver noticia completa</button>\n' +
        '              </a>\n' +
        '            </div>\n' +
        '            <div class="news-info">\n' +
        '              <h2 class="news-title">${noticia.titulo}</h2>\n' +
        '              <p class="news-description">${noticia.descripcion}</p>\n' +
        '            </div>'

}

function EliminarNoticia(nid){
    fetch().then(res=>console.);
}

