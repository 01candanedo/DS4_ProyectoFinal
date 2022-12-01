package com.example.backendolimpicos.Services;

import com.example.backendolimpicos.Config.Conexion;
import com.example.backendolimpicos.Models.Contacto;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class ContactosDb {

    Connection con;

    public ContactosDb() {
        con = new Conexion().openDb();
    }

    public List<Contacto> ObtenerContactos() {
        try {
            Statement stmt = con.createStatement();
            String query = "SELECT * FROM contacto";
            List<Contacto> contactos = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while (result.next()) {
                Contacto contacto = new Contacto( result.getInt("ID"),
                        result.getString("Nombre"),
                        result.getString("Email"),
                        result.getString("Asunto"),
                        result.getString("Mensaje"));
                contactos.add(contacto);
            }
            stmt.close();
            result.close();
            return contactos;
        } catch (Exception e) {
            int x = 1;
        }
        return null;
    }

    public int RegistrarContactos(Contacto cont){
        int resultado = 0;
        try{
            Statement stm = con.createStatement();
            String query = "INSERT INTO contacto (Nombre, Email, Asunto, Mensaje) VALUES ('"+cont.getNombre()+"','"+cont.getEmail()+"','"+cont.getAsunto()+"','"+cont.getMensaje()+"')";
            resultado = stm.executeUpdate(query);
            return resultado;
        }catch(Exception e){
            int x = 0;
        }
        return resultado;
    }


    public int ActualizarContacto(Contacto contacto){
        int resultado = 0;
        try{
            Statement stm = con.createStatement();
            String query = "UPDATE contacto SET nombre = '"+contacto.getNombre()+
                    "', email = '"+contacto.getEmail()+
                    "', asunto = '"+contacto.getAsunto()+
                    "', mensaje = '"+contacto.getMensaje()+
                    "' WHERE ID = "+contacto.getId()+"";
            return stm.executeUpdate(query);
        }catch (Exception e){
            int x = 1;
        }
        return resultado;
    }

    public int EliminarContactos(int cont){
        int resultado = 0;
        try{
            Statement stm = con.createStatement();
            String query = "DELETE FROM contacto WHERE ID = "+cont+";";
            return stm.executeUpdate(query);
        }catch (Exception e){
            int x = 1;
        }
        return resultado;
    }

}
