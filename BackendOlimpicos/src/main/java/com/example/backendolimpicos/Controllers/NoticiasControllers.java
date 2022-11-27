package com.example.backendolimpicos.Controllers;

import com.example.backendolimpicos.Models.Noticias;
import com.example.backendolimpicos.Services.NoticiasDb;
import org.springframework.web.bind.annotation.*;
import com.example.backendolimpicos.Models.Productos;
import com.example.backendolimpicos.Services.ProductosDb;

import java.util.List;

@RestController
public class NoticiasControllers{

    @GetMapping("/noticias/all")
    public List<Noticias> ObtenerTodosProductos() {
        return new NoticiasDb().ObtenerProductos();
    }

    @PostMapping("/noticias")
    public int InsertarNoticia(@RequestBody Noticias noticias){
        return new NoticiasDb().GuardarNoticias(noticias);
    }

    @PutMapping("/noticias")
    public int ActualizarNoticia(@RequestBody Noticias noticia){
        return new NoticiasDb().ActualizarNoticia(noticia);
    }

    @DeleteMapping("/noticias/{noticiasId}")
    public int EliminarNoticia(@PathVariable("noticiasId") int nid){
        return new NoticiasDb().EliminarNoticia(nid);
    }





}
