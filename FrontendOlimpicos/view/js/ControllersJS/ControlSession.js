function CrearSesion(id){
    sessionStorage.setItem("session_variable", id);
}

function CerrarSesion(){
    sessionStorage.clear();
}