let datos = [];
let datos_2 = [];

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

    //Mapeo de Cards Noticias
    let contenedor = document.getElementById('news-container');
    for(let i=0; i<datos.length; i++){
        contenedor.innerHTML += MapearPlantilla(datos[i]);
    }

    //Mapeo de Slider Banner Noticias
    //Generador de numeros aleatorios entre 1 y n cantidad de noticias para banner slider de noticias aleatorio
    var cantidadNumeros = 5;
    var myArray = []
    while(myArray.length < cantidadNumeros){
        var numeroAleatorio = Math.floor(Math.random()*datos.length);
        var existe = false;
        for(var i=0;i<myArray.length;i++){
            if(myArray [i] == numeroAleatorio){
                existe = true;
                break;
            }
        }
        if(!existe){
            myArray[myArray.length] = numeroAleatorio;
        }
    }
    console.log(myArray);
    //Proceso real de Mapeo de Slider Banner Noticias
    let contenedor_2 = document.getElementById('home');
    for(let i=0; i<myArray.length; i++){
        contenedor_2.innerHTML += MapearSliderBanner(datos[myArray[i]]);

        if(i==0){
            const img_slider = document.querySelectorAll(".img-slide");
            img_slider[0].classList.add("active");

            const content_slider = document.querySelectorAll(".content");
            content_slider[0].classList.add("active");
        }
        
        if(i == myArray.length-1){
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

    //Control de index header slider
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

function MapearSliderBanner(datos){
    return `
        <img class="img-slide" src="${datos.imagen}"></img>
        <div class="content">
            <h1 class="news-title-banner">${datos.titulo}<br></h1>
            <p>${datos.descripcion}</p>
            <a href="${datos.enlace}" target="_blank">ver m&aacute;s</a>
        </div>
    `
}

function EliminarNoticia(nid) {
    fetch(baseUrl + '/noticias/' + nid, {method: "Delete"}).then(res => {
        console.log(res);
        ObtenerNoticias;
    });

}