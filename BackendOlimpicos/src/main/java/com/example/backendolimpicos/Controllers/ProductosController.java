
package com.example.backendolimpicos.Controllers;

import com.example.backendolimpicos.Models.Productos;
import com.example.backendolimpicos.Services.ProductosDb;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductosController {

    @GetMapping("/productos/all")
    public List<Productos> ObtenerTodosProductos() {
        return new ProductosDb().ObtenerProductos();
    }

    @PostMapping("/producto")
    public int InsertarProducto(@RequestBody Productos producto){
        return new ProductosDb().GuardarProductos(producto);
    }

    @PutMapping("/producto")
    public int ActualizarProducto(@RequestBody Productos producto){
        return new ProductosDb().ActualizarProducto(producto);
    }

    @DeleteMapping("/producto/{productoId}")
    public int Delete(@PathVariable("productoId") int pid){
        return new ProductosDb().EliminarProducto(pid);
    }
}

