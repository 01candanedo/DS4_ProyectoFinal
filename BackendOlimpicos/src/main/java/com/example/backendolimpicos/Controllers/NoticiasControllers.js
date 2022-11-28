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

function ObtenerNoticiasTabla(){
    fecth(baseUrl+'/noticias/all').then(res=>{
        res.json().then(json=>{
            noticias = json;
            ImprimirNoticiasTabla;
        })
    })
}

function ImprimirNoticias(){
    let contenedor = document.getElementById("news-section");
    contenedor.innerHTML="";

    noticias.forEach(noticia=>{
        contenedor.innerHTML+=MapearNoticia(noticia);
    });
}
function ImprimirNoticiasTabla(){
    let contenedor = document.getElementById("crud");
    contenedor.innerHTML="";

    noticias.forEach(noticia=>{
        contenedor.innerHTML+=MapearNoticiaTabla(noticia);
    })
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

function MapearNoticiaTabla(noticia){
return ' <tr>\n' +
    '            <td>${noticia.id}</td>\n' +
    '            <td>${noticia.titulo}</td>\n' +
    '            <td>${noticia.descripcion}</td>\n' +
    '            <td>${noticia.imagen}</td>\n' +
    '            <td>${noticia.enlace}</td>\n' +
    '            <td>\n' +
    '              <div class="status">\n' +
    '                <a class="usuario mod" href="">Modificar</a>\n' +
    '                <a class="usuario del" href="" onclick="EliminarNoticia">Eliminar</a>\n' +
    '              </div>\n' +
    '            </td>\n' +
    '          </tr>'

}
function EliminarNoticia(nid){
    fetch(baseUrl+'/noticias/'+nid,{method:"Delete"}).then(res=>{
        console.log(res);
        ObtenerNoticias;
    });

}



