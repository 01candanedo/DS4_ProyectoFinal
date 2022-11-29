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
    let flag=false;
    let checkemail = document.getElementById("email_login").value;
    let checkpass = document.getElementById("contrasenia_login").value;
    let email, pass;
    usuarios.forEach(usr => {
        if(usr.email === checkemail && usr.pass === checkpass){
            flag=true;
            email = usr.email;
            pass = usr.pass;
        }
    });
    if(flag){
        if(email === checkemail && pass === checkpass){
            CrearSesion();
            window.location.replace("../../../index.html");
        }
    }else{
        alert("Datos incorrectos.., Intentelo nuevamente")
    }
}

function VerificarDatos(){
    let usuario = document.getElementById("nombre_usuario").value;
    let email = document.getElementById("email").value;
    usuarios.forEach(usr=>{
        if(usr.Usuario === usuario || usr.Email === email){
            alert("Algunos datos ya existen")
        }else{

        }
    });
}

function GuardarUsuario() {
    let usr = {
        usuario: document.getElementById("usuario").value,
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        email: document.getElementById("email").value,
        pass: document.getElementById("contrasenia").value,
        foto: "Default",
        fecha_Creacion: new Date().toLocaleDateString()
    };

    fetch(baseUrl + "/usuario", {
        method: "POST",
        body: JSON.stringify(usr),
        headers: {
            "Content-type": 'application/json; charset=UTF-8'
        }
    }).then(
        response => {
            document.getElementById("usuario").value = "";
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

