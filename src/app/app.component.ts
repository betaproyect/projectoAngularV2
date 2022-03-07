import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
// Interfaces
import { Usuario } from './usuario.model';
// Services
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectoAngularV2';
  //Atributos
  usuarios: Usuario[];
  us = false;
  admin = false;

  constructor(private loginService: LoginService) {
    this.usuarios = loginService.getUsuarios();
  }

  submit(f: NgForm): void {
    for (let aux of this.usuarios) {
      if (f.value.usuario == aux.usuario && f.value.password == aux.password) {
        this.us = true; //Si coincide con algun usuario
        if(f.value.usuario == "admin") {
          this.admin = true; //Si coincide con el usuario ADMIN
        }
        break;
      } else {
        this.us = false;
        this.admin = false;
      }
    }
    console.log(this.us, this.admin);
  }
}
