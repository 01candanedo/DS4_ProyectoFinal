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
            MapearDatos_2();
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

function MapearDatos_2(){
    let contenedor_2 = document.getElementById('home');
    for(let i=0; i<datos_2.length; i++){
        contenedor_2.innerHTML += MapearPlantilla_2(datos_2[i]);

        if(i==0){
            const img_slider = document.querySelectorAll(".img-slide");
            img_slider[0].classList.add("active");

            const content_slider = document.querySelectorAll(".content");
            content_slider[0].classList.add("active");
        }
        
        if(i == datos_2.length-1){
            contenedor_2.innerHTML+=`<div class="slider-navigation">
                                        <div class="nav-btn active"></div>
                                        <div class="nav-btn"></div>
                                        <div class="nav-btn"></div>
                                        <div class="nav-btn"></div>
                                        <div class="nav-btn"></div>
                                    </div>
                                    `
        }
    }

    const btns = document.querySelectorAll(".nav-btn");
    const slides = document.querySelectorAll(".img-slide");
    const contents = document.querySelectorAll(".content");

    var sliderNav = function(manual){
        btns.forEach((btn) => {
            btn.classList.remove("active");
        });

        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        contents.forEach((content) => {
            content.classList.remove("active");
        });

        btns[manual].classList.add("active");
        slides[manual].classList.add("active");
        contents[manual].classList.add("active");
    }

    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            sliderNav(i);
        });
    });
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
        <div class="content">
            <h1>${datos.nombre} ${datos.apellido}</h1>
            <div class="counter">
                <p>${datos.descripcion}</p>
            </div>
        </div>
    `
}

/* LocalStorage Search Text */
function passvalues(){
    var text = document.getElementById("txtsearch").value;
    localStorage.setItem("textsearchvalue", text);
    return false;
}