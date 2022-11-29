function CrearSesion(email){
    sessionStorage.setItem("session_variable", email);
}

function CerrarSesion(){
    sessionStorage.clear();
}