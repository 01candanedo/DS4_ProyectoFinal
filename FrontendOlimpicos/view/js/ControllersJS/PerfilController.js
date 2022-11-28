let baseUrl = "http://localhost:8080";
let usuarios = [];

function ObtenerUsuariosPerfil() {
    fetch(baseUrl + '/perfiles/all').then(res => {
        res.json().then(json => {
            usuarios = json;
            PerfilCampos(sessionStorage.getItem("user"))
        });
    });
}

function PerfilCampos(usr) {
    let usuario = usuarios.filter(u => { return u.usuario == usr })[0];
    document.getElementById("nombrecompleto").innerHTML = usuario.nombre+" "+usuario.apellido;
    document.getElementById("usuario_perfil_titulo").innerHTML = usuario.usuario;

    document.getElementById('nombre_perfil').value = usuario.nombre;
    document.getElementById('apellido_perfil').value = usuario.apellido;
    document.getElementById('usuario_perfil').value = usuario.usuario;
    document.getElementById('email_perfil').value = usuario.email;
    document.getElementById('facebook_perfil').value = usuario.facebook;
    document.getElementById('instagram_perfil').value = usuario.instagram;
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

    let prfl = {
        usuario: document.getElementById("usuario_perfil").value,
        nombre: document.getElementById("nombre_perfil").value,
        apellido: document.getElementById("apellido_perfil").value,
        email: document.getElementById("email_perfil").value,
        facebook: document.getElementById("facebook_perfil").value,
        instagram: document.getElementById("instagram_perfil").value,
    };

    fetch(baseUrl + "/perfil", {
        method: "PUT",
        body: JSON.stringify(prfl),
        headers: {
            "Content-type": 'application/json; charset=UTF-8'
        }
    });
}