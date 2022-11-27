package com.example.backendolimpicos.Models;

public class Perfil {
    private String usuario;
    private String nombre;
    private String apellido;
    private String foto;
    private String facebook;
    private String instagram;

    public Perfil(){

    }
    public Perfil(String usuario, String nombre, String apellido, String foto, String facebook, String instagram){
        this.usuario = usuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.foto = foto;
        this.facebook = facebook;
        this.instagram = instagram;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getApellido() {
        return apellido;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public String getFoto() {
        return foto;
    }

    public void setFacebook(String facebook) {
        this.facebook = facebook;
    }

    public String getFacebook() {
        return facebook;
    }

    public void setInstagram(String instagram) {
        this.instagram = instagram;
    }

    public String getInstagram() {
        return instagram;
    }
}
