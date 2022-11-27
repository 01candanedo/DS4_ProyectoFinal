let baseUrl = "http://localhost:8080";

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
    });
}