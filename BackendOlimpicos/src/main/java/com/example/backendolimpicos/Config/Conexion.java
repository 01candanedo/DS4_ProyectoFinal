package com.example.backendolimpicos.Config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    public Connection openDb() {
        LeerXML obj_leer = new LeerXML();
        try {
            obj_leer.datosXML();
            String url = "jdbc:mariadb://localhost:"+obj_leer.getPort()+"/"+obj_leer.getDbname()+"";
            String usuario = obj_leer.getUser();
            String contrasenia = "";
            Class.forName("org.mariadb.jdbc.Driver");
            return DriverManager.getConnection(url, usuario, contrasenia);
        } catch (SQLException e) {
            int x = 1;
        } catch (ClassNotFoundException cnfe) {
            int x = 1;
        } catch (Exception x) {
            System.out.println("error conversion" + x.getMessage());
        }
        return null;
    }
}
