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
})





//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////


//USUARIOS CRUD
let usuarios = [];
function ObtenerUsuariosTabla(){
    fetch(baseUrl+'/perfiles/all').then(res=>{
        res.json().then(json=>{
           usuarios = json;
            ImprimirUsuariosTabla();
        })
    })
}
function ImprimirUsuariosTabla(){
    let contenedor = document.getElementById("crud-usuarios");
    contenedor.innerHTML = "";

    contenedor.innerHTML += MapearHeadersUsuarios()
    usuarios.forEach(usuario=>{
        contenedor.innerHTML += MapearUsuarios(usuario);
    });
    contenedor.innerHTML += MapearEdicionesUsuarios()
}
function MapearUsuarios(usr){
    return ` <tr>
          <td>1</td>
          <td>${usr.usuario}</td>
          <td>${usr.nombre}</td>
          <td>${usr.apellido}</td>
          <td>${usr.email}</td>
          <td>${usr.facebook}</td>
          <td>${usr.instagram}</td>
          <td>
            <div class="status">
              <a class="usuario mod" href="">Modificar</a>
              <a class="usuario del" onclick="EliminarUsuario(${usr.usuario})">Eliminar</a>
            </div>
          </td>
        </tr>`
}
function MapearHeadersUsuarios(){
    return `<tr>
          <th>N°</th>
          <th>Usuario</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
          <th>Facebook</th>
          <th>Instagram</th>
          <th>Accion</th>
        </tr>`
}
function MapearEdicionesUsuarios(){
    //<td><input className="entrada" type="text" name="usuario" placeholder="Usuario.."></td>
    return ` <tr>
          <td>></td>
          <td><input class="entrada" type="hidden" name="usuario""></td>
          <td><input class="entrada" type="text" name="nombre" placeholder="Nombre.."></td>
          <td><input class="entrada" type="text" name="apellido" placeholder="Apellido.."></td>
          <td><input class="entrada" type="email" name="correo" placeholder="Email.."></td>
          <td><input class="entrada" type="text" name="tipo" placeholder="Facebook.."></td>
          <td><input class="entrada" type="text" name="tipo" placeholder="Instagram.."></td>
          <td>
            <div class="status">
              <a class="usuario add" href="">Añadir</a>
            </div>
          </td>
        </tr>`
}

function EliminarUsuario(nusuario){
    fetch(baseUrl+'/perfil/'+nusuario,{ method:"Delete"}).then(res=>{
        console.log(res);
        ObtenerUsuariosTabla();
    })
}