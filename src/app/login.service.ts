import { Injectable } from '@angular/core';
//Interfaces
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //Atributos
  private usuarios: Usuario[];

  constructor() {
    this.usuarios = [
      {
        id: 1,
        usuario: "admin",
        password: "admin"
      },
      {
        id: 2,
        usuario: "usuario",
        password: "usuario"
      }
    ];
  }

  getUsuarios() {
    return this.usuarios;
  }
}
