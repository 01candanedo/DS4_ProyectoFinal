let baseUrl ='http://localhost:8080'
let noticias = []; 
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
    contenedor.innerHTML="";

    noticias.forEach(noticia=>{
        contenedor.innerHTML+=MapearNoticiaTabla(noticia);
    })
    contenedor.innerHTML+=
    `<tr>
            <td><input id="id-noticias" type="hidden" disabled="true"></td>
            <td><input id="titulo" class="entrada" type="text" name="nombre" placeholder="Nombre.."></td>
            <td><input id="descripcion" class="entrada" type="text" name="apellido" placeholder="Apellido.."></td>
            <td><input id="imagen" class="entrada" type="text" name="tipo" placeholder="Tipo.."></td>
            <td><input id="enlace" class="entrada" type="email" name="correo" placeholder="Email.."></td>
            <td>
              <div class="status">
                <button class="usuario add2">añadir</button>
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
        fetch(baseUrl+'/noticias/'+nid,{method:"Delete"}).then(res=>{
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
        id:,
        titulo: document.getElementById("titulo").value,
        descripcion: document.getElementById("descripcion").value,
        imagen: document.getElementById("imagen").value,
        enlace:document.getElementById("enlace").value
    };

    fetch(baseUrl+"/noticias")
}

document.addEventListener('DOMContentLoaded', e => {
    ObtenerNoticiasTabla(); 
})

