let baseUrl = "http://localhost:8080";

/*
function GuardarUsuario() {
    let data = {
        usuario: document.getElementById("nombre_usuario").value,
        email: document.getElementById("email").value,
        contrasenia: document.getElementById("contrasenia").value,
    };

    if(email){
        fetch(baseUrl + "/usuario", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": 'application/json; charset=UTF-8'
            }
        });
        alert("Usuario Registrado Exitosamente");
    }else{
        alert("El correo electrónico no es válido o ya está en uso");
        document.getElementById("nombre_usuario").innerHTML;
    }
}
 */

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
