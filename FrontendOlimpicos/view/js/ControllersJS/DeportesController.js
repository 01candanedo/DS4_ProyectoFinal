let datos = [];

function ObtenerDeportes(){

    fetch("http://localhost:8080/deportes/all").
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
    let contenedor = document.getElementById('sports-container');
    for(let i=0; i<datos.length; i++){
        contenedor.innerHTML += MapearPlantilla(datos[i]);
    }
}

function MapearPlantilla(datos){
    return `
        <div class="sports-card">
            <div class="sports-image">
                <img src="${datos.imagen}" class="sports-thumb" alt="">
                <a href="${datos.enlace}" target="_blank">
                    <button class="card-btn">ver mas</button>
                </a>
            </div>
            <div class="sports-info">
                <h2 class="sports-title">${datos.titulo}</h2>
                <p class="sports-description">${datos.descripcion}</p>
            </div>
        </div>
    `

}