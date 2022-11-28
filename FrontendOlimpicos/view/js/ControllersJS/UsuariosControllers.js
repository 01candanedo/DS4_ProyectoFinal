let baseUrl = "http://localhost:8080";
let usuarios = [];

function ObtenerUsuarios() {
    fetch(baseUrl + '/usuarios/all').then(res => {
        res.json().then(json => {
            usuarios = json;
        });
    });
}

function VerificarEmail(){
    ObtenerUsuarios()
    let flag=false;
    let email;
    for (usr of usuarios) {
        if(usr.usuario == document.getElementById("email").value){
            flag=true;
            email = usr.usuario;
            alert(usr.usuario+" "+usr.contrasenia)
        }
    }
    /*
    usuarios.forEach(usr => {
        if(usr.usuario == document.getElementById("email").value){
            flag=true;
            email = usr.usuario;
            alert(usr.usuario+" "+usr.contrasenia)
        }
    });*/

    if(flag){
        if(email==document.getElementById("email").value){
            sessionStorage.setItem("user", email);
            window.location.replace("../../../index.html");
        }
    }else{
        alert("Valores incorrectos.. verifique el correo o contraseña "+email)
    }
}

function CerrarSesion(){
    sessionStorage.clear();
}

function GuardarUsuario() {
    let data = {
        usuario: document.getElementById("nombre_usuario").value,
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        email: document.getElementById("email").value,
        pass: document.getElementById("contrasenia").value,
    };

    fetch(baseUrl + "/usuario", {
        method: "POST",
        body: JSON.stringify(data),
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
