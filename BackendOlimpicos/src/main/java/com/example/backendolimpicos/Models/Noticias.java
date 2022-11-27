package com.example.backendolimpicos.Models;

public class Noticias {
    private int id; 
    private String titulo;
    private String descripcion;
    private String imagen;
    private String verMas;

    public Noticias(int id, String titulo, String descripcion, String imagen, String verMas) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }

    public Noticias() {}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public void setVerMas(String verMas) {
        this.verMas = verMas;
    }

    public String getVerMas() {
        return verMas;
    }
}
