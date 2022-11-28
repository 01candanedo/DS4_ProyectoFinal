package com.example.backendolimpicos.Controllers;

import com.example.backendolimpicos.Models.Noticias;
import com.example.backendolimpicos.Models.Perfil;
import com.example.backendolimpicos.Models.Usuarios;
import com.example.backendolimpicos.Services.NoticiasDb;
import com.example.backendolimpicos.Services.PerfilDb;
import com.example.backendolimpicos.Services.UsuariosDb;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PerfilControllers {

    @GetMapping("/perfiles/all")
    public List<Perfil> ObtenerTodosPerfiles(){
        return new PerfilDb().ObtenerPerfil();
    }

    @PostMapping("/perfil")
    public int RegistrarPerfil(@RequestBody Perfil perfil){
        return new PerfilDb().RegistrarPerfil(perfil);
    }

    @PutMapping("/perfil")
    public int ActualizarPerfil(@RequestBody Perfil perfil){
        return new PerfilDb().ActualizarPerfil(perfil);
    }

}

