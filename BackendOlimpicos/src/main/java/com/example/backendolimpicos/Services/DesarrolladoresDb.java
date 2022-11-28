package com.example.backendolimpicos.Services;

import com.example.backendolimpicos.Config.Conexion;
import com.example.backendolimpicos.Models.Desarrolladores;
import com.example.backendolimpicos.Models.Noticias;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class DesarrolladoresDb {
    Connection con;

    public DesarrolladoresDb(){
        con = new Conexion().openDb();
    }

    public List<Desarrolladores> ObtenerDesarrolladores() {
        try {
            Statement stmt = con.createStatement();
            String query = "SELECT * FROM desarrolladores";
            List<Desarrolladores> desarrolladores = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while (result.next()) {
                Desarrolladores desarrollador = new Desarrolladores(
                        result.getInt("ID"),
                        result.getString("Nombre"),
                        result.getString("Apellido"),
                        result.getString("Carrera"),
                        result.getString("Descripcion"),
                        result.getString("enlacecv"),
                        result.getString("foto"),
                        result.getString("github"),
                        result.getString("facebook"),
                        result.getString("instagram"),
                        result.getString("twitter")
                        );
                desarrolladores.add(desarrollador);
            }
            stmt.close();
            result.close();
            return desarrolladores;
        } catch (Exception e) {
            int x = 1;
        }
        return null;
    }

    public int GuardarDesarrolladores(Desarrolladores desarrolladores){
        int resultado = 0;
        try{
            Statement stm = con.createStatement();
            String query = "Call ingresarDesarrollador('"
                    +desarrolladores.getId()+"',"
                    +desarrolladores.getNombre()+","
                    +desarrolladores.getApellido()+",'"
                    +desarrolladores.getCarrera()+"','"
                    +desarrolladores.getDescripcion()+"','"
                    +desarrolladores.getEnlacecv()+"','"
                    +desarrolladores.getFoto()+"','"
                    +desarrolladores.getGithub()+"','"
                    +desarrolladores.getFacebook()+"','"
                    +desarrolladores.getInstagram()+"','"
                    +desarrolladores.getTwitter()+"')";
            resultado = stm.executeUpdate(query);
            return resultado;
        }catch(Exception e){
            int x = 0;
        }
        return resultado;
    }

    public int EliminarDesarrolladores(int nid){
        int resultado = 0;
        try{
            Statement stm = con.createStatement();
            String query = "Call EliminarDesarrollador("+nid+")";
            return stm.executeUpdate(query);
        }catch (Exception e){
            int x = 1;
        }
        return resultado;
    }

    public int ActualizarDesarrollador(Desarrolladores desarrolladores){
        int resultado = 0;
        try{
            Statement stm = con.createStatement();
            String query = "Call actualizarDesarrollador('"
                    +desarrolladores.getId()+"',"
                    +desarrolladores.getNombre()+","
                    +desarrolladores.getApellido()+",'"
                    +desarrolladores.getCarrera()+"','"
                    +desarrolladores.getDescripcion()+"','"
                    +desarrolladores.getEnlacecv()+"','"
                    +desarrolladores.getFoto()+"','"
                    +desarrolladores.getGithub()+"','"
                    +desarrolladores.getFacebook()+"','"
                    +desarrolladores.getInstagram()+"','"
                    +desarrolladores.getTwitter()+"')";
            return stm.executeUpdate(query);
        }catch (Exception e){
            int x = 1;
        }
        return resultado;
    }

}
