function CrearSesion(){
    sessionStorage.setItem("user", email);
}

function CerrarSesion(){
    sessionStorage.clear();
}