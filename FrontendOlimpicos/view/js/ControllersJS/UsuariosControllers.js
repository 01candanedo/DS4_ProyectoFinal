let baseUrl = "http://localhost:8080";
let usuarios = [];
let perfil = [];

function ObtenerUsuarios() {
    fetch(baseUrl + '/usuarios/all').then(res => {
        res.json().then(json => {
            usuarios = json;
        });
    });
}

function VerificarEmail(){
    ObtenerUsuarios()
    //let flag=false;
    let variab = document.getElementById("email").value;
    let email;
    usuarios.forEach(usr => {
        if(usr.usuario === variab){
            //flag=true;
            email = usr.usuario;
        }
    });
    //if(flag){
        if(email === variab){
            sessionStorage.setItem("user", email);
            window.location.replace("../../../index.html");
        }
    //}
}

function CerrarSesion(){
    sessionStorage.clear();
}

function GuardarUsuario() {
    let usr = {
        usuario: document.getElementById("nombre_usuario").value,
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        email: document.getElementById("email").value,
        pass: document.getElementById("contrasenia").value,
    };

    fetch(baseUrl + "/usuario", {
        method: "POST",
        body: JSON.stringify(usr),
        headers: {
            "Content-type": 'application/json; charset=UTF-8'
        }
    });

    let prf = {
        usuario: document.getElementById("nombre_usuario").value,
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        email: document.getElementById("email").value,
    };

    fetch(baseUrl + "/perfil", {
        method: "POST",
        body: JSON.stringify(prf),
        headers: {
            "Content-type": 'application/json; charset=UTF-8'
        }
    }).then(
        response => {
            document.getElementById("nombre_usuario").value = "";
            document.getElementById("nombre").value = "";
            document.getElementById("apellido").value = "";
            document.getElementById("email").value = "";
            document.getElementById("contrasenia").value = "";
            alert("Registro Exitoso")
        }
    ).catch(
        error => {
            alert("Ocurrio un error")
        });
}
