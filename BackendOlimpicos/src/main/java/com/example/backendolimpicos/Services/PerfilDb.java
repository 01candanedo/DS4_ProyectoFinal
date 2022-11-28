package com.example.backendolimpicos.Services;

import com.example.backendolimpicos.Config.Conexion;
import com.example.backendolimpicos.Models.Perfil;
import com.example.backendolimpicos.Models.Usuarios;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class PerfilDb {
    Connection con;

    public PerfilDb(){
        con = new Conexion().openDb();
    }

    public List<Perfil> ObtenerPerfil() {
        try {
            Statement stmt = con.createStatement();
            String query = "SELECT * FROM perfil";
            List<Perfil> perfiles = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while (result.next()) {
                Perfil perfil = new Perfil(
                        result.getString("usuario"),
                        result.getString("nombre"),
                        result.getString("apellido"),
                        result.getString("email"),
                        result.getString("foto"),
                        result.getString("facebook"),
                        result.getString("instagram"));
                perfiles.add(perfil);
            }
            stmt.close();
            result.close();
            return perfiles;
        } catch (Exception e) {
            int x = 1;
        }
        return null;
    }


    public int ActualizarPerfil(Perfil perfil){
        int resultado = 0;
        try{
            Statement stm = con.createStatement();
            String query = "UPDATE perfil SET nombre = '"+perfil.getNombre()+
                    "', apellido = '"+perfil.getApellido()+
                    "', email = '"+perfil.getEmail()+
                    "', facebook = '"+perfil.getFacebook()+
                    "', instagram = '"+perfil.getInstagram()+
                    "' WHERE usuario = '"+perfil.getUsuario()+"'";
            return stm.executeUpdate(query);
        }catch (Exception e){
            int x = 1;
        }
        return resultado;
    }

    public int RegistrarPerfil(Perfil prf){
        int resultado = 0;
        try{
            Statement stm = con.createStatement();
            String query = "INSERT INTO perfil (usuario, nombre, apellido, email) VALUES ('"+prf.getUsuario()+"','"+prf.getNombre()+"','"+prf.getApellido()+"','"+prf.getEmail()+"')";
            resultado = stm.executeUpdate(query);
            return resultado;
        }catch(Exception e){
            int x = 0;
        }
        return resultado;
    }
}
