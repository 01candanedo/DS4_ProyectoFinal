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
    usuarios.forEach(usr => {
        if(usr.usuario == document.getElementById("email").value){
            flag=true;
            email = usr.usuario;
            alert(usr.usuario+" "+usr.contrasenia)
        }
    });

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
    alert("cerrando sesion")
    sessionStorage.clear("user");
}

function GuardarUsuario() {
    let data = {
        usuario: document.getElementById("nombre_usuario").value,
        email: document.getElementById("email").value,
        contrasenia: document.getElementById("contrasenia").value,
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
            document.getElementById("email").value = "";
            document.getElementById("contrasenia").value = "";
            alert("Registro Exitoso")
        }
    ).catch(
        error => {
            alert("Ocurrio un error")
        });
}
