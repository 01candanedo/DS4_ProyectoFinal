let baseUrl = "http://localhost:8080";
let contadorIncorrectos = 0; 
let bloquearInicioSesion = false;
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

function VerificarEmail() {
  if (bloquearInicioSesion) {
    console.log("Debes esperar 30 segundos antes de volver a intentar iniciar sesión.");
    return;
  }

  let flag = false;
  let checkemail = document.getElementById("email_login").value;
  let checkpass = document.getElementById("contrasenia_login").value;
  let email, pass, id;

  usuarios.forEach(usr => {
    if (usr.email === checkemail && usr.pass === checkpass) {
      flag = true;
      email = usr.email;
      pass = usr.pass;
      id = usr.id;
    }
  });

  if (flag) {
    if (email === checkemail && pass === checkpass) {
      CrearSesion(id);
      window.location.replace("../../../index.html");
    }
  } else {
    alert("Datos incorrectos. Inténtelo nuevamente");
    contadorIncorrectos++;
    if (contadorIncorrectos >= 3) {
      alert("Límite de intentos fallidos alcanzado. Esperando 30 segundos...");
      bloquearInicioSesion = true;

      setTimeout(function() {
        alert("Se ha restablecido el inicio de sesión.");
        bloquearInicioSesion = false;
        contadorIncorrectos = 0;
      }, 30000);
    }
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

function VerificarDatosPerfil(){
    let usuario = document.getElementById("usuario_perfil").value;
    let nombre = document.getElementById("nombre_perfil").value;
    let apellido = document.getElementById("apellido_perfil").value;
    let email = document.getElementById("email_perfil").value;
    let pass = document.getElementById("contrasenia_perfil").value;
    if(usuario === ""|| nombre === "" || apellido === "" || email === "" || pass === ""){
        alert("Llene todos los campos")
    }else{
        ActualizarUsuario()
    }

}

function CalcularFecha(){
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let resultado
    if(month < 10){
        resultado = `${day}-0${month}-${year}`;
    }else{
        resultado = `${day}-${month}-${year}`;
    }
    return resultado;
}

function GuardarUsuario() {
    let validPass = false;
    let regexPass = /^(?=.*[A-Z])(?=.*\d)(?=.*\W).+$/;
    let pass = document.getElementById("contrasenia_registro").value;
    
    if (regexPass.test(pass)) {
        validPass = true;   
    }

    if (validPass) {
        let usr = {
            usuario: document.getElementById("usuario_registro").value,
            nombre: document.getElementById("nombre_registro").value,
            apellido: document.getElementById("apellido_registro").value,
            email: document.getElementById("email_registro").value,
            pass: pass,
            foto: "Default",
            fecha_Creacion: CalcularFecha()
        }; 

        alert("Usuario registrado con éxito");

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
                
            }
        ).catch(
            error => {
                alert("Ocurrió un error");
            }
        );
    } else {
        alert("La contraseña debe contener al menos una mayúscula, números y un caracter especial mi bro");
    }
}


function PerfilCampos(id) {
    let perfil = perfiles.filter(p => { return p.id == id })[0];
    document.getElementById('id_perfil').value = perfil.id;
    document.getElementById('nombrecompleto').innerHTML = perfil.nombre+" "+perfil.apellido;
    document.getElementById('fecha_creacion').innerHTML = perfil.fecha_Creacion;
    document.getElementById('usuario_perfil_titulo').innerHTML = perfil.usuario;
    document.getElementById('nombre_perfil').value = perfil.nombre;
    document.getElementById('apellido_perfil').value = perfil.apellido;
    document.getElementById('usuario_perfil').value = perfil.usuario;
    document.getElementById('email_perfil').value = perfil.email;
    document.getElementById('contrasenia_perfil').value = perfil.pass;
}

function ActualizarUsuario() {
    let usr = {
        id: document.getElementById("id_perfil").value,
        usuario: document.getElementById("usuario_perfil").value,
        nombre: document.getElementById("nombre_perfil").value,
        apellido: document.getElementById("apellido_perfil").value,
        email: document.getElementById("email_perfil").value,
        pass: document.getElementById("contrasenia_perfil").value,
    };

    fetch(baseUrl + "/usuario", {
        method: "PUT",
        body: JSON.stringify(usr),
        headers: {
            "Content-type": 'application/json; charset=UTF-8'
        }
    })
}

/* LocalStorage Search Text */
function passvalues(){
    var text = document.getElementById("txtsearch").value;
    localStorage.setItem("textsearchvalue", text);
    return false;
}

