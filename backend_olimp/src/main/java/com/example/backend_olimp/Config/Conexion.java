package com.example.backend_olimp.Config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    public Connection openDb() {
        LeerXML obj_leer = new LeerXML();
        try {
            obj_leer.datosXML();
            String cadenaconn = "jdbc:sqlserver://localhost:" + obj_leer.getPort() +
                    ";databaseName=" + obj_leer.getDbname() +
                    ";user=" + obj_leer.getUser() +
                    ";password=" + obj_leer.getPassword() +
                    ";encrypt=true;trustServerCertificate=true;";
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            return DriverManager.getConnection(cadenaconn);
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