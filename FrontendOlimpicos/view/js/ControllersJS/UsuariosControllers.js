let baseUrl = "http://localhost:8080";
let usuarios = [];
let perfiles = [];

function ObtenerUsuarios() {
    fetch(baseUrl + '/usuarios/all').then(res => {
        res.json().then(json => {
            usuarios = json;
        });
    });
}

function ObtenerUsuariosPerfil() {
    fetch(baseUrl + '/usuarios/all').then(res => {
        res.json().then(json => {
            perfiles = json;
            PerfilCampos(sessionStorage.getItem("session_variable"))
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
            CrearSesion(email);
            window.location.replace("../../../index.html");
        }
    }else{
        alert("Datos incorrectos.., Intentelo nuevamente")
    }

}

function VerificarDatos(){
    let flag=false;
    let usuario = document.getElementById("usuario_registro").value;
    let nombre = document.getElementById("nombre_registro").value;
    let apellido = document.getElementById("apellido_registro").value;
    let email = document.getElementById("email_registro").value;
    let pass = document.getElementById("contrasenia_registro").value;
    usuarios.forEach(usr=>{
        if(usr.usuario === usuario || usr.email === email){
            flag=true;
        }
    });
    if(flag){
        alert("Algunos datos ya existen, intentelo nuevamente")
    }else {
        if(usuario === ""|| nombre === "" || apellido === "" || email === "" || pass === ""){
            alert("Llene todos los campos")
        }else{
            GuardarUsuario();
        }
    }
}

function GuardarUsuario() {
    let usr = {
        usuario: document.getElementById("usuario_registro").value,
        nombre: document.getElementById("nombre_registro").value,
        apellido: document.getElementById("apellido_registro").value,
        email: document.getElementById("email_registro").value,
        pass: document.getElementById("contrasenia_registro").value,
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
            document.getElementById("usuario_registro").value = "";
            document.getElementById("nombre_registro").value = "";
            document.getElementById("apellido_registro").value = "";
            document.getElementById("email_registro").value = "";
            document.getElementById("contrasenia_registro").value = "";
            alert("Registro Exitoso")
        }
    ).catch(
        error => {
            alert("Ocurrio un error")
        });
}


function PerfilCampos(email) {
    let perfil = perfiles.filter(p => { return p.email == email })[0];
    document.getElementById("nombrecompleto").innerHTML = perfil.nombre+" "+perfil.apellido;
    document.getElementById("fecha_creacion").innerHTML = perfil.fecha_Creacion;
    document.getElementById("usuario_perfil_titulo").innerHTML = perfil.usuario;
    document.getElementById('nombre_perfil').value = perfil.nombre;
    document.getElementById('apellido_perfil').value = perfil.apellido;
    document.getElementById('usuario_perfil').value = perfil.usuario;
    document.getElementById('email_perfil').value = perfil.email;
}

function ActualizarUsuario() {
    let usr = {
        usuario: document.getElementById("usuario_perfil").value,
        nombre: document.getElementById("nombre_perfil").value,
        apellido: document.getElementById("apellido_perfil").value,
        email: document.getElementById("email_perfil").value,
    };

    fetch(baseUrl + "/usuario", {
        method: "PUT",
        body: JSON.stringify(usr),
        headers: {
            "Content-type": 'application/json; charset=UTF-8'
        }
    });
}

/* LocalStorage Search Text */
function passvalues(){
    var text = document.getElementById("txtsearch").value;
    localStorage.setItem("textsearchvalue", text);
    return false;
}

