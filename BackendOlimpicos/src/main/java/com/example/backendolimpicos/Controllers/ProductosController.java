package com.example.backendolimpicos.Controllers;

import com.example.backendolimpicos.Models.Productos;
import com.example.backendolimpicos.Services.ProductosDb;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductosController {

    @GetMapping("/productos/all")
    public List<Productos> ObtenerTodosProductos() {
        return new ProductosDb().ObtenerProductos();
    }
}
