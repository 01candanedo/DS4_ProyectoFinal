let datos = [];

function ObtenerDesarrolladores(){

    fetch("http://localhost:8080/desarrolladores/all").
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
    let contenedor = document.getElementById('developer-container');
    for(let i=0; i<datos.length; i++){
        contenedor.innerHTML += MapearPlantilla(datos[i]);
    }
}

function MapearPlantilla(datos){
    return `
        <div class="pres">
            <center><img src="${datos.foto}" alt="mision"></center>
            <div class="info-presentacion">
                <p class="nombres"><b>${datos.nombre}<br> ${datos.apellido}</b></p>
                <p>${datos.carrera}</p>
                <p>${datos.descripcion}</p>
                <div class="contact-icons">
                    <a href="${datos.github}" target="_blank"><i class="fa-brands fa-github "></i></a>
                    <a href="${datos.facebook}" target="_blank"><i class="fa-brands fa-facebook "></i></a>
                    <a href="${datos.instagram}" target="_blank"><i class="fa-brands fa-instagram "></i></a>
                    <a href="${datos.twitter} target="_blank""><i class="fa-brands fa-twitter "></i></a>
                </div>
                <a class="btn-mas" href="${datos.enlacecv}" target="_blank">Ver más</a>
            </div>
        </div>
    `

}