let datos = [];
let datos_2 = [];

function ObtenerDeportes(){

    fetch("http://localhost:8080/deportes/all").
    then(resultado => {
        resultado.json().then(json => {
            datos = json;
            console.log(datos);
            MapearDatos();
        })
    });

    fetch("http://localhost:8080/deportistas/all").
    then(resultado_2 => {
        resultado_2.json().then(json => {
            datos_2 = json;
            console.log(datos_2);
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

    let contenedor_2 = document.getElementById('home');
    for(let i=0; i<datos_2.length; i++){
        contenedor_2.innerHTML += MapearPlantilla_2(datos_2[i]);
    }

    const img_slider = document.querySelectorAll(".img-slide");
    img_slider[0].classList.add("active");
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

function MapearPlantilla_2(datos){
    return `
        <img class="img-slide" src="${datos.imagen}"></img>
    `
}