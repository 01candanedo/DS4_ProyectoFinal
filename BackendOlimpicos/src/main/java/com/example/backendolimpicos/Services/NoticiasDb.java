package com.example.backendolimpicos.Services;

import com.example.backendolimpicos.Config.Conexion;
import com.example.backendolimpicos.Models.Noticias;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class NoticiasDb {
    Connection con;

    public NoticiasDb(){
        con = new Conexion().openDb();
    }

    public List<Noticias> ObtenerNoticias(){
        try {
            Statement stmt = con.createStatement();
            String query = "SELECT * FROM noticia";
            List<Noticias> noticias = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while (result.next()) {
                Noticias noticia = new Noticias(
                        result.getInt("ID"),
                        result.getString("Titulo"),
                        result.getString("Descripcion"),
                        result.getString("imagen"),
                        result.getString("Enlace"));
                noticias.add(noticia);
            }
            stmt.close();
            result.close();
            return noticias;
        } catch (Exception e) {
            int x = 1;
        }
        return null;
    }

    public int GuardarNoticias(Noticias noticias){
        int resultado = 0;
        try{
            Statement stm = con.createStatement();

            String query = "insert into noticia values(NULL,'"
                    +noticias.getTitulo()+"','"
                    +noticias.getDescripcion()+"','"
                    +noticias.getImagen()+"','"
                    +noticias.getEnlace()+"')";
            resultado = stm.executeUpdate(query);
            return resultado;
        }catch(Exception e){
            int x = 0;
        }
        return resultado;
    }

    public int EliminarNoticias(int nid){
        int resultado = 0;
        try{
            Statement stm = con.createStatement();
            String query = "delete from noticia where id ="+nid+"";
            return stm.executeUpdate(query);
        }catch (Exception e){
            int x = 1;
        }
        return resultado;
    }

    public int ActualizarNoticia(Noticias noticia){
      /*  System.out.println(noticia.getId());*/
        int resultado = 0;
        try{
            Statement stm = con.createStatement();
            String query = "update noticia set titulo='"
                    +noticia.getTitulo()+"', descripcion='"
                    +noticia.getDescripcion()+"',imagen='"
                    +noticia.getImagen()+"',enlace='"
                    +noticia.getEnlace()+"'"+"where id="+noticia.getId();
            return stm.executeUpdate(query);
        }catch (Exception e){
            int x = 1;
        }
        return resultado;
    }


}
