let baseUrl ='http://localhost:8080'
let noticias = [];

//NOTICIAS CRUD
function ObtenerNoticiasTabla(){
    fetch(baseUrl+'/noticias/all').then(res=>{
        res.json().then(json=>{
            noticias = json;
            console.log(noticias)
            ImprimirNoticiasTabla();
        })
    })
}

function ImprimirNoticiasTabla(){
    let contenedor = document.getElementById("crud");
    contenedor.innerHTML=
    `<tr>
            <th>id</th>
            <th>titulo</th>
            <th>descripcion</th>
            <th>imagen</th>
            <th>enlace</th>
            <th><center>Accion</center></th>
          </tr>
          `
    noticias.forEach(noticia=>{
        contenedor.innerHTML+=MapearNoticiaTabla(noticia);
    })
    contenedor.innerHTML+=
    `<tr>

            <td><input id="id-noticias" type="hidden" disabled="true"></td>
            <td><input id="titulo" class="entrada" type="text" name="nombre" placeholder="Titulo"></td>
            <td><input id="descripcion" class="entrada" type="text" name="apellido" placeholder="Descripcion"></td>
            <td><input id="imagen" class="entrada" type="text" name="tipo" placeholder="Imagen"></td>
            <td><input id="enlace" class="entrada" type="email" name="correo" placeholder="Enlace"></td>
            <td>
              <div class="status">
                <button class="usuario add2" onclick="GuardarNoticiaTabla()">añadir</button>
                <button class="usuario add" onclick=ActualizarNoticiasReporte()>Actualizar</button>
                
              </div>
            </td>
          </tr>
          `    
}

function MapearNoticiaTabla(noticia){
    return ` <tr>
                  <td>${noticia.id}</td> 
                  <td>${noticia.titulo}</td> 
                  <td>${noticia.descripcion}</td> 
                  <td>${noticia.imagen}</td> 
                  <td>${noticia.enlace}</td>
                  <td> 
                    <div class="status"> 
                      <button class="usuario mod noticiabd" onclick="CargarUnicoReporte(${noticia.id})">Modificar</button> 
                      <button class="usuario del"  onclick="EliminarNoticiaTabla(${noticia.id})">Eliminar</button> 
                    </div> 
                  </td> 
                </tr>
                `
    }

function EliminarNoticiaTabla(nid){
        fetch(baseUrl+'/noticias/delete/'+nid,{method:"Delete"}).then(res=>{
            console.log(res);
            ObtenerNoticiasTabla();
    });

}
function ActualizarNoticiasReporte(){
    let data ={
    titulo: document.getElementById("titulo").value,
    descripcion: document.getElementById("descripcion").value,
    imagen: document.getElementById("imagen").value,
    enlace: document.getElementById("enlace").value,
    id:parseInt(document.getElementById("id-noticias").value)

    }; 

    console.log(data)
    
    fetch(baseUrl + "/noticias", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": 'application/json; charset=UTF-8'
        }
      }).then(res => {
        ObtenerNoticiasTabla();
      });
}

function CargarUnicoReporte(nid){
    let titulo = document.getElementById("titulo");
    let descripcion = document.getElementById("descripcion");
    let imagen = document.getElementById("imagen");
    let enlace = document.getElementById("enlace");
    let id = document.getElementById("id-noticias");

    noticias.forEach(noticia=>{
        if(noticia.id==nid){
            titulo.value=noticia.titulo; 
            descripcion.value=noticia.descripcion;
            imagen.value = noticia.imagen;
            enlace.value = noticia.enlace; 
            id.value = noticia.id; 
        }
    })
}

function GuardarNoticiaTabla(){
    let data={
        titulo: document.getElementById("titulo").value,
        descripcion: document.getElementById("descripcion").value,
        imagen: document.getElementById("imagen").value,
        enlace:document.getElementById("enlace").value
    };

    fetch(baseUrl+"/noticias",{
      method:"POST",
      body:JSON.stringify(data),
      headers:{
        "Content-type":'application/json; charset=UTF-8' 
      }
    }).then(res=>{
      ObtenerNoticiasTabla(); 
    }); 
}


//DEPORTES CRUD
let deportes = []; 
function ObtenerDeportesTabla(){
    fetch(baseUrl+'/deportes/all').then(res=>{
        res.json().then(json=>{
            deportes = json;
            console.log(noticias)
            ImprimirDeportesTabla();
        })
    })
}

function ImprimirDeportesTabla(){
    let contenedor = document.getElementById("crud-deportes");
    contenedor.innerHTML=
    `<tr>
            <th>id</th>
            <th>titulo</th>
            <th>descripcion</th>
            <th>imagen</th>
            <th>enlace</th>
            <th><center>Accion</center></th>
          </tr>
          `
    deportes.forEach(deporte=>{
        contenedor.innerHTML+=MapearDeportesTabla(deporte);
    })
    contenedor.innerHTML+=
    `<tr>

            <td><input id="id-deportes" type="hidden" disabled="true"></td>
            <td><input id="titulo-deportes" class="entrada" type="text" name="nombre" placeholder="Titulo"></td>
            <td><input id="descripcion-deportes" class="entrada" type="text" name="apellido" placeholder="Descripcion"></td>
            <td><input id="imagen-deportes" class="entrada" type="text" name="tipo" placeholder="Imagen"></td>
            <td><input id="enlace-deportes" class="entrada" type="email" name="correo" placeholder="Enlace"></td>
            <td>
              <div class="status">
                <button class="usuario add2" onclick="GuardarDeportesTabla()">añadir</button>
                <button class="usuario add" onclick=ActualizarDeportes()>Actualizar</button>
                
              </div>
            </td>
          </tr>
          `    
}

function MapearDeportesTabla(deporte){
    return ` <tr>
                  <td>${deporte.id}</td> 
                  <td>${deporte.titulo}</td> 
                  <td>${deporte.descripcion}</td> 
                  <td>${deporte.imagen}</td> 
                  <td>${deporte.enlace}</td>
                  <td> 
                    <div class="status"> 
                      <button class="usuario mod noticiabd" onclick="CargarUnicoDeportes(${deporte.id})">Modificar</button> 
                      <button class="usuario del"  onclick="EliminarDeportesTabla(${deporte.id})">Eliminar</button> 
                    </div> 
                  </td> 
                </tr>
                `
    }

function EliminarDeportesTabla(nid){
        fetch(baseUrl+'/deportes/delete/'+nid,{method:"Delete"}).then(res=>{
            console.log(res);
            ObtenerDeportesTabla();
    });
}

function ActualizarDeportes(){
    let data ={
    titulo: document.getElementById("titulo-deportes").value,
    descripcion: document.getElementById("descripcion-deportes").value,
    imagen: document.getElementById("imagen-deportes").value,
    enlace: document.getElementById("enlace-deportes").value,
    id:parseInt(document.getElementById("id-deportes").value)

    }; 

    console.log(data)
    
    fetch(baseUrl + "/deportes", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": 'application/json; charset=UTF-8'
        }
      }).then(res => {
        ObtenerDeportesTabla();
      });
}

function CargarUnicoDeportes(nid){
    let titulo = document.getElementById("titulo-deportes");
    let descripcion = document.getElementById("descripcion-deportes");
    let imagen = document.getElementById("imagen-deportes");
    let enlace = document.getElementById("enlace-deportes");
    let id = document.getElementById("id-deportes");

    deportes.forEach(noticia=>{
        if(noticia.id==nid){
            titulo.value=noticia.titulo; 
            descripcion.value=noticia.descripcion;
            imagen.value = noticia.imagen;
            enlace.value = noticia.enlace; 
            id.value = noticia.id; 
        }
    })
}

function GuardarDeportesTabla(){
    let data={
        titulo: document.getElementById("titulo-deportes").value,
        descripcion: document.getElementById("descripcion-deportes").value,
        imagen: document.getElementById("imagen-deportes").value,
        enlace:document.getElementById("enlace-deportes").value
    };

    fetch(baseUrl+"/deportes",{
      method:"POST",
      body:JSON.stringify(data),
      headers:{
        "Content-type":'application/json; charset=UTF-8' 
      }
    }).then(res=>{
      ObtenerDeportesTabla(); 
    }); 
    console.log(data)
}

document.addEventListener('DOMContentLoaded', e => {
    ObtenerNoticiasTabla(); 
    ObtenerDeportesTabla();
    ObtenerUsuariosTabla();
    ObtenerContactosTabla()
})

//USUARIOS CRUD
let usuarios = [];
function ObtenerUsuariosTabla(){
    fetch(baseUrl+'/usuarios/all').then(res=>{
        res.json().then(json=>{
           usuarios = json;
            ImprimirUsuariosTabla();
        })
    })
}
function ImprimirUsuariosTabla(){
    let contenedor = document.getElementById("crud-usuarios");
    contenedor.innerHTML = MapearHeadersUsuarios()
    usuarios.forEach(usuario=>{
        contenedor.innerHTML += MapearUsuarios(usuario);
    });
    contenedor.innerHTML += MapearEdicionesUsuarios()
}
function MapearUsuarios(usr){
    return ` <tr>
          <td>${usr.id}</td>
          <td>${usr.usuario}</td>
          <td>${usr.nombre}</td>
          <td>${usr.apellido}</td>
          <td>${usr.email}</td>
          <td>${usr.pass}</td>
          <td>
            <div class="status">
              <button class="usuario mod" onclick="LlenarDatos(${usr.id})">Modificar</button>
              <button class="usuario del" onclick="EliminarUsuario(${usr.id})">Eliminar</button>
            </div>
          </td>
        </tr>`
}
function MapearHeadersUsuarios(){
    return `<tr>
          <th>N-ID°</th>
          <th>Usuario</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
          <th>Contraseña</th>
          <th>Accion</th>
        </tr>`
}
function MapearEdicionesUsuarios(){
    return ` <tr>
          <td><input id="id_reporte" class="entrada" type="hidden" name="id"></td>
          <td><input id="usuario_reporte" class="entrada" type="text" name="usuario" placeholder="Usuario.."></td>
          <td><input id="nombre_reporte" class="entrada" type="text" name="nombre" placeholder="Nombre.."></td>
          <td><input id="apellido_reporte" class="entrada" type="text" name="apellido" placeholder="Apellido.."></td>
          <td><input id="email_reporte" class="entrada" type="email" name="correo" placeholder="Email.."></td>
          <td><input id="pass_reporte" class="entrada" type="password" name="pass" placeholder="Contraseña.."></td>
          <td>
            <div class="status">
              <button class="usuario add2" onclick="GuardarUsuarioReporte()">Añadir</button>
              <button class="usuario add" onclick="ActualizarUsuarioReporte()">Actualizar</button>
            </div>
          </td>
        </tr>`
}
function EliminarUsuario(ndata){
    fetch(baseUrl+'/usuario/del/'+ndata,{method:"Delete"}).then(res=>{
        console.log(res);
        ObtenerUsuariosTabla();
    })
}

function LlenarDatos(usrid){
    usuarios.forEach(usuario=>{
        if(usuario.id==usrid){
            document.getElementById("id_reporte").value = usuario.id;
            document.getElementById("usuario_reporte").value = usuario.usuario;
            document.getElementById("nombre_reporte").value = usuario.nombre;
            document.getElementById("apellido_reporte").value = usuario.apellido;
            document.getElementById("email_reporte").value = usuario.email;
            document.getElementById("pass_reporte").value = usuario.pass;
        }
    })
}

function GuardarUsuarioReporte() {
    let usrep = {
        usuario: document.getElementById("usuario_reporte").value,
        nombre: document.getElementById("nombre_reporte").value,
        apellido: document.getElementById("apellido_reporte").value,
        email: document.getElementById("email_reporte").value,
        pass: document.getElementById("pass_reporte").value,
        foto: "Default",
        fecha_Creacion: new Date().toLocaleDateString()
    };

    fetch(baseUrl + "/usuario", {
        method: "POST",
        body: JSON.stringify(usrep),
        headers: {
            "Content-type": 'application/json; charset=UTF-8'
        }
    }).then(
        response => {
            ObtenerUsuariosTabla();
            alert("Registro guardado exitosamente")
        }
    )
}

function ActualizarUsuarioReporte(){
    let datarep = {
        id: document.getElementById("id_reporte").value,
        usuario: document.getElementById("usuario_reporte").value,
        nombre: document.getElementById("nombre_reporte").value,
        apellido: document.getElementById("apellido_reporte").value,
        email: document.getElementById("email_reporte").value,
        pass: document.getElementById("pass_reporte").value
    };

    fetch(baseUrl + "/usuario/", {
        method: "PUT",
        body: JSON.stringify(datarep),
        headers: {
            "Content-type": 'application/json; charset=UTF-8'
        }
    }).then(
        response => {
            ObtenerUsuariosTabla();
            alert("Registro actualizado exitosamente")
        }
    )
}




//CONTACTOS CRUD
let contactos = [];
function ObtenerContactosTabla(){
    fetch(baseUrl+'/contacto/all').then(res=>{
        res.json().then(json=>{
            contactos = json;
            ImprimirContactosTabla();
        })
    })
}

function ImprimirContactosTabla(){
    let contenedor = document.getElementById("crud-contactos");
    contenedor.innerHTML = MapearHeadersContactos()
    contactos.forEach(contacto=>{
        contenedor.innerHTML += MapearContactos(contacto);
    });
    contenedor.innerHTML += MapearEdicionesContactos()
}
function MapearContactos(cont){
    return ` <tr>
          <td>${cont.id}</td>
          <td>${cont.nombre}</td>
          <td>${cont.email}</td>
          <td>${cont.asunto}</td>
          <td>${cont.mensaje}</td>
          <td>
            <div class="status">
              <button class="usuario mod" onclick="LlenarDatosContactos(${cont.id})">Modificar</button>
              <button class="usuario del" onclick="EliminarContactos(${cont.id})">Eliminar</button>
            </div>
          </td>
        </tr>`
}
function MapearHeadersContactos(){
    return `<tr>
          <th>N-ID°</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Asunto</th>
          <th>Mensaje</th>
        </tr>`
}
function MapearEdicionesContactos(){
    return ` <tr>
          <td><input id="id_contacto" class="entrada" type="hidden" name="id"></td>
          <td><input id="nombre_contacto" class="entrada" type="text" name="nombre" placeholder="Nombre.."></td>
          <td><input id="email_contacto" class="entrada" type="email" name="correo" placeholder="Email.."></td>
          <td><input id="asunto_contacto" class="entrada" type="text" name="asunto" placeholder="Asunto.."></td>
          <td><input id="mensaje_contacto" class="entrada" type="text" name="mensaje" placeholder="Mensaje.."></td>
          <td>
            <div class="status">
              <button class="usuario add2" onclick="GuardarUsuarioContactos()">Añadir</button>
              <button class="usuario add" onclick="ActualizarContactosReporte()">Actualizar</button>
            </div>
          </td>
        </tr>`
}
function EliminarContactos(ncontact){
    fetch(baseUrl+'/contacto/del/'+ncontact,{method:"Delete"}).then(res=>{
        console.log(res);
        ObtenerContactosTabla();
    })
}

function LlenarDatosContactos(contactid){
    contactos.forEach(contacto=>{
        if(contacto.id==contactid){
            document.getElementById("id_contacto").value = contacto.id;
            document.getElementById("nombre_contacto").value = contacto.nombre;
            document.getElementById("email_contacto").value = contacto.email;
            document.getElementById("asunto_contacto").value = contacto.asunto;
            document.getElementById("mensaje_contacto").value = contacto.mensaje;
        }
    })
}

function GuardarUsuarioContactos() {
    let contact = {
        nombre: document.getElementById("nombre_contacto").value,
        email: document.getElementById("email_contacto").value,
        asunto: document.getElementById("asunto_contacto").value,
        mensaje: document.getElementById("mensaje_contacto").value,
    };

    fetch(baseUrl + "/contacto", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
            "Content-type": 'application/json; charset=UTF-8'
        }
    }).then(
        response => {
            ObtenerContactosTabla();
            alert("Contactos guardado exitosamente")
        }
    )
}

function ActualizarContactosReporte(){
    let datacontact = {
        id: document.getElementById("id_contacto").value,
        nombre: document.getElementById("nombre_contacto").value,
        email: document.getElementById("email_contacto").value,
        asunto: document.getElementById("asunto_contacto").value,
        mensaje: document.getElementById("mensaje_contacto").value
    };

    fetch(baseUrl + "/contacto", {
        method: "PUT",
        body: JSON.stringify(datacontact),
        headers: {
            "Content-type": 'application/json; charset=UTF-8'
        }
    }).then(
        response => {
            ObtenerContactosTabla();
            alert("Contactos actualizado exitosamente")
        }
    )
}

/* LocalStorage Search Text */
function passvalues(){
  var text = document.getElementById("txtsearch").value;
  localStorage.setItem("textsearchvalue", text);
  return false;
}