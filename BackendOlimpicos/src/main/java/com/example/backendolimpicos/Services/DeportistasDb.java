package com.example.backendolimpicos.Services;

import com.example.backendolimpicos.Config.Conexion;
import com.example.backendolimpicos.Models.Deportistas;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class DeportistasDb {
    Connection con;

    public DeportistasDb(){
        con = new Conexion().openDb();
    }

    public List<Deportistas> ObtenerDeportistas() {
        try {
            Statement stmt = con.createStatement();
            String query = "SELECT * FROM deportistas";
            List<Deportistas> deportistas = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while (result.next()) {
                Deportistas deportista = new Deportistas(
                        result.getInt("ID"),
                        result.getString("Nombre"),
                        result.getString("Apellido"),
                        result.getString("Descripcion"),
                        result.getString("Imagen"));
                deportistas.add(deportista);
            }
            stmt.close();
            result.close();
            return deportistas;
        } catch (Exception e) {
            int x = 1;
        }
        return null;
    }

    public int GuardarDeportistas(Deportistas deportistas){
        int resultado = 0;
        try{
            Statement stm = con.createStatement();
            String query = "Call ingresarDeportista('"
                    +deportistas.getId()+"',"
                    +deportistas.getNombre()+","
                    +deportistas.getApellido()+",'"
                    +deportistas.getDescripcion()+"','"
                    +deportistas.getImagen()+"')";
            resultado = stm.executeUpdate(query);
            return resultado;
        }catch(Exception e){
            int x = 0;
        }
        return resultado;
    }

    public int EliminarDeportistas(int nid){
        int resultado = 0;
        try{
            Statement stm = con.createStatement();
            String query = "Call EliminarDeportista("+nid+")";
            return stm.executeUpdate(query);
        }catch (Exception e){
            int x = 1;
        }
        return resultado;
    }

    public int ActualizarDeportista(Deportistas deportistas){
        int resultado = 0;
        try{
            Statement stm = con.createStatement();
            String query = "Call actualizarDeportista('"
                    +deportistas.getId()+"',"
                    +deportistas.getNombre()+","
                    +deportistas.getApellido()+",'"
                    +deportistas.getDescripcion()+"','"
                    +deportistas.getImagen()+"')";
            return stm.executeUpdate(query);
        }catch (Exception e){
            int x = 1;
        }
        return resultado;
    }

}
