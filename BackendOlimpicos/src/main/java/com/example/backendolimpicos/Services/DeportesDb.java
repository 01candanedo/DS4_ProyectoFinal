package com.example.backendolimpicos.Services;

import com.example.backendolimpicos.Config.*;
import com.example.backendolimpicos.Models.*;

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
            String query = "insert into deporte values(NULL,'"
                    +deportes.getTitulo()+"','"
                    +deportes.getDescripcion()+"','"
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
            String query = "delete from deporte where id="+nid+"";
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
            String query = "update deporte set titulo='"
                    +deporte.getTitulo()+"',descripcion='"
                    +deporte.getDescripcion()+"',imagen='"
                    +deporte.getImagen()+"',enlace='"
                    +deporte.getEnlace()+"' where id="+deporte.getId();
            return stm.executeUpdate(query);
        }catch (Exception e){
            int x = 1;
        }
        return resultado;
    }

}
