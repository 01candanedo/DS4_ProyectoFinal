package com.example.backendolimpicos.Services;

import com.example.backendolimpicos.Config.Conexion;
import com.example.backendolimpicos.Models.Usuarios;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
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
            String query = "SELECT * FROM usuario";
            List<Usuarios> usuarios = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while (result.next()) {
                Usuarios usuario = new Usuarios(
                        result.getString("usuario"),
                        result.getString("nombre"),
                        result.getString("apellido"),
                        result.getString("email"),
                        result.getString("pass"));
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
            String query = "INSERT INTO usuario (usuario, nombre, apellido, email, pass) VALUES ('"+usr.getUsuario()+"','"+usr.getNombre()+"','"+usr.getApellido()+"','"+usr.getEmail()+"','"+usr.getPass()+"')";
            resultado = stm.executeUpdate(query);
            return resultado;
        }catch(Exception e){
            int x = 0;
        }
        return resultado;
    }

/*
    public int ActualizarUsuario(Usuarios usuario){
        int resultado = 0;
        try{
            Statement stm = con.createStatement();
            String query = "UPDATE usuario SET usuario.nombre = "+usuario.getUsuario()+" productos.precio = " +usuario
                    "    WHERE productos.id = pid;"
            String query = "Call ActualizarProducto(" + producto.getId() + ",'" + producto.getNombre() + "'," + producto.getPrecio() + ")";
            return stm.executeUpdate(query);
        }catch (Exception e){
            int x = 1;
        }
        return resultado;
    }
 */
}


