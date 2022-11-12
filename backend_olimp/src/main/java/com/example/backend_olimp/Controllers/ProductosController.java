package com.example.backend_olimp.Controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend_olimp.Models.Productos;
import com.example.backend_olimp.Services.ProductosDb;

@RestController
public class ProductosController {

    @GetMapping("/productos/all")
    public List<Productos> ObtenerTodosProductos() {
        return new ProductosDb().ObtenerProductos();
    }
}
