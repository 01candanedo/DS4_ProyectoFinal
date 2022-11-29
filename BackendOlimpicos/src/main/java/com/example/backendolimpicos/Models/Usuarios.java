package com.example.backendolimpicos.Models;

public class Usuarios {

    private int ID;
    private String Usuario, Nombre, Apellido, Email, Pass, Foto, Fecha_Creacion;

    public Usuarios(int ID, String Usuario, String Nombre, String Apellido, String Email, String Pass, String Foto, String Fecha_Creacion) {
        this.ID = ID;
        this.Usuario = Usuario;
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Email = Email;
        this.Pass = Pass;
        this.Foto = Foto;
        this.Fecha_Creacion = Fecha_Creacion;
    }

    public Usuarios(String Usuario, String Nombre, String Apellido, String Email, String Pass, String Foto, String Fecha_Creacion) {
        this.Usuario = Usuario;
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Email = Email;
        this.Pass = Pass;
        this.Foto = Foto;
        this.Fecha_Creacion = Fecha_Creacion;
    }

    public Usuarios(){}

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public String getUsuario() {
        return Usuario;
    }

    public void setUsuario(String usuario) {
        Usuario = usuario;
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String nombre) {
        Nombre = nombre;
    }

    public String getApellido() {
        return Apellido;
    }

    public void setApellido(String apellido) {
        Apellido = apellido;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getPass() {
        return Pass;
    }

    public void setPass(String pass) {
        Pass = pass;
    }

    public String getFoto() {
        return Foto;
    }

    public void setFoto(String foto) {
        Foto = foto;
    }

    public String getFecha_Creacion() {
        return Fecha_Creacion;
    }

    public void setFecha_Creacion(String fecha_Creacion) {
        Fecha_Creacion = fecha_Creacion;
    }
}
