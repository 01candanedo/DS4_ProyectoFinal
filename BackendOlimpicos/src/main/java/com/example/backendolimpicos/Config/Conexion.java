package com.example.backendolimpicos.Config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    public Connection openDb() {
        //LeerXML obj_leer = new LeerXML();
        try {
            //obj_leer.datosXML();
            String url = "jdbc:mariadb://localhost:3306/olimpicosdb";
            Class.forName("org.mariadb.jdbc.Driver");
            return DriverManager.getConnection(url, "root", "");
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
