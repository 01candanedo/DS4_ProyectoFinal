let datos = [];

function ObtenerNoticias(){

    fetch("http://localhost:8080/noticias/all").
    then(resultado => {
        resultado.json().then(json => {
            datos = json;
            console.log(datos);
            MapearDatos();
        })
    });
}

function MapearDatos(){
    //let contenido = document.getElementById('contenido');
    let contenedor = document.getElementById('news-container');
    for(let i=0; i<datos.length; i++){
        contenedor.innerHTML += MapearPlantilla(datos[i]);
    }
}

function MapearPlantilla(datos){
    return `
        <div class="news-card">
            <div class="news-image">
                <img src="${datos.imagen}" class="news-thumb" alt="">
                <a href="${datos.enlace}" target="_blank">
                    <button class="card-btn">ver noticia completa</button>
                </a>
            </div>
            <div class="news-info">
                <h2 class="news-title">${datos.titulo}</h2>
                <p class="news-description">"${datos.descripcion}"</p>
            </div>
        </div>
    `

}