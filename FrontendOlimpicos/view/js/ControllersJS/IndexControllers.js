let datos = [];

function ObtenerSlider(){
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
    //Mapeo de Slider Banner Noticias en Index
    //Generador de numeros aleatorios entre 1 y n cantidad de noticias para banner slider de noticias aleatorio
    var cantidadNumeros = 4;
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
    //Proceso real de Mapeo de Slider Banner Index / Noticias
    let contenedor_2 = document.getElementById('home');
    for(let i=0; i<myArray.length; i++){
        contenedor_2.innerHTML += MapearSliderBanner(datos[myArray[i]]);
        
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

    //Counter
    let days = document.querySelector('.days .number'),
        hours = document.querySelector('.hours .number'),
        minutes = document.querySelector('.minutes .number'),
        seconds = document.querySelector('.seconds .number'),
        //Count Down End Date
        //1000 milliseconds = 1 second
        countDownDate = new Date("Jul 26, 2024 12:59:59").getTime();

    let counter = setInterval(() => {
        //Get Date Now
        let dateNow = new Date().getTime();
        //Find The Date Difference Between Now and End Date
        let dateDiff = countDownDate - dateNow;

        //Get Time Unit
        let day = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        let hour = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minute = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
        let second = Math.floor((dateDiff % (1000 * 60)) / 1000);

        days.innerHTML = day < 10 ? `0${day}` : day;
        hours.innerHTML = hour < 10 ? `0${hour}` : hour;
        minutes.innerHTML = minute < 10 ? `0${minute}` : minute;
        seconds.innerHTML = second < 10 ? `0${second}` : second;

        if (dateDiff == 0) {
            clearInterval(counter);
        }
    }, 1000);
}

function MapearSliderBanner(datos){
    var cadena = datos.imagen;
    var cadenamod = cadena.substr(2);
    console.log(cadenamod);
    return `
        <img class="img-slide" src="FrontendOlimpicos/view/${cadenamod}"></img>
        <div class="content">
            <h1 class="title-banner">${datos.titulo}<br></h1>
            <p>${datos.descripcion}</p>
            <a href="${datos.enlace}" target="_blank">ver m&aacute;s</a>
        </div>
    `
}

/* LocalStorage Search Text */
function passvalues(){
    var text = document.getElementById("txtsearch").value;
    localStorage.setItem("textsearchvalue", text);
    return false;
}
