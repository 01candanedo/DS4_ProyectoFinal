package com.example.backendolimpicos.Controllers;

import com.example.backendolimpicos.Models.Deportistas;
import com.example.backendolimpicos.Services.DeportistasDb;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DeportistasControllers {
    @GetMapping("/deportistas/all")
    public List<Deportistas> ObtenerDeportistas() {
        return new DeportistasDb().ObtenerDeportistas();
    }

    @PostMapping("/deportistas")
    public int InsertarDeportistas(@RequestBody Deportistas deportistas){
        return new DeportistasDb().GuardarDeportistas(deportistas);
    }

    @PutMapping("/deportistas")
    public int ActualizarDeportistas(@RequestBody Deportistas deportistas){
        return new DeportistasDb().ActualizarDeportista(deportistas);
    }

    @DeleteMapping("/deportistas/{deportistaId}")
    public int EliminarDeportistas(@PathVariable("deportistaId") int nid){
        return new DeportistasDb().EliminarDeportistas(nid);
    }
}
