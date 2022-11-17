package com.example.backendolimpicos.Services;

import com.example.backendolimpicos.Config.Conexion;
import com.example.backendolimpicos.Models.Productos;

import java.sql.Statement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class ProductosDb {
    Connection con;

    public ProductosDb() {
        con = new Conexion().openDb();
    }

    public List<Productos> ObtenerProductos() {
        try {
            Statement stmt = con.createStatement();
            String query = "SELECT * FROM productos";
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
