package com.example.backendolimpicos.Controllers;

import com.example.backendolimpicos.Models.Noticias;
import com.example.backendolimpicos.Services.NoticiasDb;
import org.springframework.web.bind.annotation.*;

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

    //@RequestMapping(value = "/{noticiasId}",method=RequestMethod.DELETE)

   /* @RequestMapping(value = "/noticias/{id}", method = RequestMethod.GET)
    public int EliminarNoticias(@PathVariable int id){
        return new NoticiasDb().EliminarNoticias(id);
    }*/

    //@RequestMapping(value = "/noticias/{id}", method = RequestMethod.GET)
    @DeleteMapping("/noticias/delete/{id}")
    public int getBrand(@PathVariable Integer id) {
        return new NoticiasDb().EliminarNoticias(id);
    }

}
