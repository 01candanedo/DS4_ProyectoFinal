package com.example.backendolimpicos.Models;

public class Productos {
    private int Id;
    private String nombre;
    private float precio;


    public Productos(){

    }

    public Productos(int id, String nombre, float precio) {
        this.Id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public float getPrecio() {
        return precio;
    }

    public void setPrecio(float precio) {
        this.precio = precio;
    }
}
