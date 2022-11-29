package com.example.backendolimpicos.Controllers;

import com.example.backendolimpicos.Models.Desarrolladores;
import com.example.backendolimpicos.Services.DesarrolladoresDb;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DesarrolladoresControllers {

    @GetMapping("/desarrolladores/all")
    public List<Desarrolladores> ObtenerDesarrolladores() {
        return new DesarrolladoresDb().ObtenerDesarrolladores();
    }

    @PostMapping("/desarrolladores")
    public int InsertarDesarrollador(@RequestBody Desarrolladores desarrolladores){
        return new DesarrolladoresDb().GuardarDesarrolladores(desarrolladores);
    }

    @PutMapping("/desarrolladores")
    public int ActualizarDesarrollador(@RequestBody Desarrolladores desarrolladores){
        return new DesarrolladoresDb().ActualizarDesarrollador(desarrolladores);
    }

    @DeleteMapping("/noticias/{desarrolladoresId}")
    public int EliminarDesarrolladores(@PathVariable("desarrolladoresId") int nid){
        return new DesarrolladoresDb().EliminarDesarrolladores(nid);
    }

}
