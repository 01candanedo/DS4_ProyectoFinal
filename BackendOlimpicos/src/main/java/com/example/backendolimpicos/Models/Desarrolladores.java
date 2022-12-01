package com.example.backendolimpicos.Models;

public class Desarrolladores {
    private int id;
    private String nombre;
    private String apellido;
    private String carrera;
    private String descripcion;
    private String enlacecv;
    private String foto;
    private String github;
    private String facebook;
    private String instagram;
    private String twitter;

    public Desarrolladores(int id, String nombre, String apellido, String carrera, String descripcion, String enlacecv, String foto, String github, String facebook, String instagram, String twitter) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.carrera = carrera;
        this.descripcion = descripcion;
        this.enlacecv = enlacecv;
        this.foto = foto;
        this.github = github;
        this.facebook = facebook;
        this.instagram = instagram;
        this.twitter = twitter;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public String getCarrera() {
        return carrera;
    }

    public void setCarrera(String carrera) {
        this.carrera = carrera;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getEnlacecv() {
        return enlacecv;
    }

    public void setEnlacecv(String enlacecv) {
        this.enlacecv = enlacecv;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public String getGithub() {
        return github;
    }

    public void setGithub(String github) {
        this.github = github;
    }

    public String getFacebook() {
        return facebook;
    }

    public void setFacebook(String facebook) {
        this.facebook = facebook;
    }

    public String getInstagram() {
        return instagram;
    }

    public void setInstagram(String instagram) {
        this.instagram = instagram;
    }

    public String getTwitter() {
        return twitter;
    }

    public void setTwitter(String twitter) {
        this.twitter = twitter;
    }
}
