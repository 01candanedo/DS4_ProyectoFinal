package com.example.backendolimpicos.Models;

public class Usuarios {

    private String usuario, nombre, apellido, email, pass;


    public Usuarios(String usuario, String nombre, String apellido, String email, String pass) {
        this.usuario = usuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.pass = pass;
    }

    public Usuarios(){}

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

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

}
