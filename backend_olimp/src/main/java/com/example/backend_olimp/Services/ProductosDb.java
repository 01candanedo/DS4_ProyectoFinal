package com.example.backend_olimp.Services;

import java.sql.Statement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.example.backend_olimp.Config.Conexion;
import com.example.backend_olimp.Models.Productos;

public class ProductosDb {
    Connection con;

    public ProductosDb() {
        con = new Conexion().openDb();
    }

    public List<Productos> ObtenerProductos() {
        try {
            Statement stmt = con.createStatement();
            String query = "SELECT * FROM Productos";
            List<Productos> productos = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while (result.next()) {
                Productos producto = new Productos(
                        result.getString("nombre"),
                        result.getFloat("precio"));
                productos.add(producto);
            }
            stmt.close();
            result.close();
            return productos;
        } catch (Exception e) {
            int x = 1;
        }
        return null;
    }
}
