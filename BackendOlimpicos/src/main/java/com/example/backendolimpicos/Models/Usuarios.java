package com.example.backendolimpicos.Models;

public class Usuarios {
    private String usuario;
    private String email;
    private String contrasenia;

    public Usuarios(String usuario, String email, String contrasenia) {
        this.usuario = usuario;
        this.email = email;
        this.contrasenia = contrasenia;
    }

    public Usuarios(){}

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContrasenia() {
        return contrasenia;
    }

    public void setContrasenia(String contrasenia) {
        this.contrasenia = contrasenia;
    }
}
