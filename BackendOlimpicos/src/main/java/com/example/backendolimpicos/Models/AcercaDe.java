package com.example.backendolimpicos.Models;

public class AcercaDe{
    private String nombre;
    private String profesion;
    private String verMas;

    public AcercaDe(String nombre, String profesion, String verMas){
        this.nombre=nombre;
        this.profesion=profesion;
        this.verMas=verMas;
    }
    public AcercaDe(){
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public void setProfesion(String profesion) {
        this.profesion = profesion;
    }

    public String getProfesion() {
        return profesion;
    }
}
