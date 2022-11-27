package com.example.backendolimpicos.Services;

import com.example.backendolimpicos.Config.Conexion;
import com.example.backendolimpicos.Models.Perfil;
import com.example.backendolimpicos.Models.Productos;

import java.sql.Connection;
import java.sql.Statement;

public class PerfilDb {
    Connection con;

    public PerfilDb(){
        con = new Conexion().openDb();
    }

    public int ActualizarPerfil(Perfil perfil){
        int resultado = 0;
        try{
            Statement stm = con.createStatement();
            String query = "Call actualizarPerfil('"
                    +perfil.getUsuario()+"',"
                    +perfil.getNombre()+","
                    +perfil.getApellido()+",'"
                    +perfil.getFoto()+"','"
                    +perfil.getFacebook()+"',"
                    +perfil.getInstagram()+")";
            return stm.executeUpdate(query);
        }catch (Exception e){
            int x = 1;
        }
        return resultado;
    }
    
}
