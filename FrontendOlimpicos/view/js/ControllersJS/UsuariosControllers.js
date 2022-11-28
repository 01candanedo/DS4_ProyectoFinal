let baseUrl = "http://localhost:8080";

function ObtenerUsuarios() {
    fetch(baseUrl + '/productos/all').then(res => {
        res.json().then(json => {
            productos = json;
            ImprimirProductos();
        });
    });
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
