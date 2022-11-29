package com.example.backendolimpicos.Controllers;

import org.springframework.web.bind.annotation.RestController;
import com.example.backendolimpicos.Models.Deportes;
import com.example.backendolimpicos.Services.DeportesDb;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DeportesControllers {
    @GetMapping("/deportes/all")
    public List<Deportes> ObtenerDeportes() {
        return new DeportesDb().ObtenerDeportes();
    }

    @PostMapping("/deportes")
    public int InsertarDeportes(@RequestBody Deportes deportes){
        return new DeportesDb().GuardarDeportes(deportes);
    }

    @PutMapping("/deportes")
    public int ActualizarDeportes(@RequestBody Deportes deportes){
        return new DeportesDb().ActualizarDeporte(deportes);
    }

    @DeleteMapping("/deportes/delete/{deportesId}")
    public int EliminarDeportes(@PathVariable("deportesId") int nid){
        return new DeportesDb().EliminarDeportes(nid);
    }

}
