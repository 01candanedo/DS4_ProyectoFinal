package com.example.backendolimpicos.Services;

import com.example.backendolimpicos.Config.Conexion;
import com.example.backendolimpicos.Models.Deportes;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class DeportesDb {

    Connection con;

    public DeportesDb(){
        con = new Conexion().openDb();
    }

    public List<Deportes> ObtenerDeportes() {
        try {
            Statement stmt = con.createStatement();
            String query = "SELECT * FROM deporte";
            List<Deportes> deportes = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while (result.next()) {
                Deportes deporte = new Deportes(
                        result.getInt("ID"),
                        result.getString("Titulo"),
                        result.getString("Descripcion"),
                        result.getString("imagen"),
                        result.getString("Enlace"));
                deportes.add(deporte);
            }
            stmt.close();
            result.close();
            return deportes;
        } catch (Exception e) {
            int x = 1;
        }
        return null;
    }

    public int GuardarDeportes(Deportes deportes){
        int resultado = 0;
        try{
            Statement stm = con.createStatement();
            String query = "Call ingresarDeporte('"
                    +deportes.getId()+"',"
                    +deportes.getTitulo()+","
                    +deportes.getDescripcion()+",'"
                    +deportes.getImagen()+"','"
                    +deportes.getEnlace()+"')";
            resultado = stm.executeUpdate(query);
            return resultado;
        }catch(Exception e){
            int x = 0;
        }
        return resultado;
    }

    public int EliminarDeportes(int nid){
        int resultado = 0;
        try{
            Statement stm = con.createStatement();
            String query = "Call EliminarDeporte("+nid+")";
            return stm.executeUpdate(query);
        }catch (Exception e){
            int x = 1;
        }
        return resultado;
    }

    public int ActualizarDeporte(Deportes deporte){
        int resultado = 0;
        try{
            Statement stm = con.createStatement();
            String query = "Call actualizarDeporte('"
                    +deporte.getId()+"',"
                    +deporte.getTitulo()+","
                    +deporte.getDescripcion()+",'"
                    +deporte.getImagen()+"','"
                    +deporte.getEnlace()+"')";
            return stm.executeUpdate(query);
        }catch (Exception e){
            int x = 1;
        }
        return resultado;
    }

}
