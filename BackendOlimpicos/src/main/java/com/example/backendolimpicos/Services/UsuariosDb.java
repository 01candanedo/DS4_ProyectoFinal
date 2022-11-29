package com.example.backendolimpicos.Services;

import com.example.backendolimpicos.Config.Conexion;
import com.example.backendolimpicos.Models.Usuarios;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

public class UsuariosDb {

    Connection con;

    public UsuariosDb() {
        con = new Conexion().openDb();
    }

    public List<Usuarios> ObtenerUsuarios() {
        try {
            Statement stmt = con.createStatement();
            String query = "SELECT * FROM usuarios";
            List<Usuarios> usuarios = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while (result.next()) {
                Usuarios usuario = new Usuarios(
                        result.getInt("ID"),
                        result.getString("Usuario"),
                        result.getString("Nombre"),
                        result.getString("Apellido"),
                        result.getString("Email"),
                        result.getString("Pass"),
                        result.getString("Foto"),
                        result.getString("Fecha_Creacion"));
                usuarios.add(usuario);
            }
            stmt.close();
            result.close();
            return usuarios;
        } catch (Exception e) {
            int x = 1;
        }
        return null;
    }

    public int RegistrarUsuarios(Usuarios usr){
        int resultado = 0;
        try{
            Statement stm = con.createStatement();
            String query = "INSERT INTO usuarios (Usuario, Nombre, Apellido, Email, Pass, Foto, Fecha_Creacion) VALUES ('"+usr.getUsuario()+"','"+usr.getNombre()+"','"+usr.getApellido()+"','"+usr.getEmail()+"','"+usr.getPass()+"','"+usr.getFoto()+"','"+usr.getFecha_Creacion()+"')";
            resultado = stm.executeUpdate(query);
            return resultado;
        }catch(Exception e){
            int x = 0;
        }
        return resultado;
    }


    public int ActualizarUsuario(Usuarios usuario){
        int resultado = 0;
        try{
            Statement stm = con.createStatement();
            String query = "UPDATE usuario SET nombre = '"+usuario.getNombre()+
                    "', apellido = '"+usuario.getApellido()+
                    "', email = '"+usuario.getEmail()+
                    "' WHERE usuario = '"+usuario.getUsuario()+"'";
            return stm.executeUpdate(query);
        }catch (Exception e){
            int x = 1;
        }
        return resultado;
    }

    public int EliminarUsuario(String usr){
        int resultado = 0;
        try{
            Statement stm = con.createStatement();
            String query = "DELETE FROM usuario WHERE usuario = '"+usr+"';";
            return stm.executeUpdate(query);
        }catch (Exception e){
            int x = 1;
        }
        return resultado;
    }
}


