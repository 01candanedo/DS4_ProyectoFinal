package com.example.backendolimpicos.Controllers;

import com.example.backendolimpicos.Models.Productos;
import com.example.backendolimpicos.Models.Usuarios;
import com.example.backendolimpicos.Services.ProductosDb;
import com.example.backendolimpicos.Services.UsuariosDb;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UsuariosControllers {

    @GetMapping("/usuarios/all")
    public List<Usuarios> ObtenerTodosUsuarios(){
        return new UsuariosDb().ObtenerUsuarios();
    }

    @PostMapping("/usuario")
    public int RegistrarUsuario(@RequestBody Usuarios usuario){
        return new UsuariosDb().RegistrarUsuarios(usuario);
    }

    //@PutMapping("/usuario")
    //public int ActualizarDatosUsuario(@RequestBody Usuarios usuario){
        //return new UsuariosDb().ActualizarUsuario(usuario);
    //}
}
