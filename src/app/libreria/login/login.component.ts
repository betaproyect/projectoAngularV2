import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
// Interfaces
import { Usuario } from '../libreria.model';
// Services
import { LibreriaService } from '../libreria.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Atributos
  usuarios: Usuario[];
  boleano = false;

  constructor(private libreriaService: LibreriaService) { // Servicio por parametro
    this.usuarios = libreriaService.getUsuarios();
  }

  ngOnInit(): void {
  }

  submit(f: NgForm) {
    for (let aux of this.usuarios) {
      if (f.value.usuario == aux.usuario && f.value.password == aux.password) {
        this.boleano = true;
        break;
      } else {
        this.boleano = false;
      }
    }

    console.log(this.boleano);
  }

}
