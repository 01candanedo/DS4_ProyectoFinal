package com.example.backendolimpicos.Controllers;

import com.example.backendolimpicos.Models.Contacto;
import com.example.backendolimpicos.Models.Usuarios;
import com.example.backendolimpicos.Services.ContactosDb;
import com.example.backendolimpicos.Services.UsuariosDb;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ContactoControllers {

    @GetMapping("/contacto/all")
    public List<Contacto> ObtenerTodosContacto(){
        return new ContactosDb().ObtenerContactos();
    }

    @PostMapping("/contacto")
    public int RegistrarContacto(@RequestBody Contacto contacto){
        return new ContactosDb().RegistrarContactos(contacto);
    }

    @PutMapping("/contacto")
    public int ActualizarDatoContacto(@RequestBody Contacto contacto){
        return new ContactosDb().ActualizarContacto(contacto);
    }

    @DeleteMapping("/contacto/del/{contactoid}")
    public int EliminarContacto(@PathVariable("contactoid") int contactoid){
        return new ContactosDb().EliminarContactos(contactoid);
    }



}
