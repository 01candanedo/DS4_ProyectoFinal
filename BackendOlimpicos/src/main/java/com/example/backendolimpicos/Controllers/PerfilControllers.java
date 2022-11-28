package com.example.backendolimpicos.Controllers;

import com.example.backendolimpicos.Models.Noticias;
import com.example.backendolimpicos.Models.Perfil;
import com.example.backendolimpicos.Services.NoticiasDb;
import com.example.backendolimpicos.Services.PerfilDb;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class PerfilControllers {
    @PutMapping("/perfil")
    public int ActualizarPerfil(@RequestBody Perfil perfil){
        return new PerfilDb().ActualizarPerfil(perfil);
    }
    @PostMapping("/perfil")
    public int InsertarNoticia(@RequestBody Noticias noticias){
        return new NoticiasDb().GuardarNoticias(noticias);
    }

}

