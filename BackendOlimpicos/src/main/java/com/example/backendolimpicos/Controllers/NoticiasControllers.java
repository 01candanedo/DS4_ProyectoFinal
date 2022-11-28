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
    public List<Noticias> ObtenerNoticias() {
        return new NoticiasDb().ObtenerNoticias();
    }

    @PostMapping("/noticias")
    public int InsertarNoticias(@RequestBody Noticias noticias){
        return new NoticiasDb().GuardarNoticias(noticias);
    }

    @PutMapping("/noticias")
    public int ActualizarNoticias(@RequestBody Noticias noticia){
        return new NoticiasDb().ActualizarNoticia(noticia);
    }

    @DeleteMapping("/noticias/{noticiasId}")
    public int EliminarNoticias(@PathVariable("noticiasId") int nid){
        return new NoticiasDb().EliminarNoticias(nid);
    }


}
