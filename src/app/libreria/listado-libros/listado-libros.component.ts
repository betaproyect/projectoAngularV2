import { Component, OnInit } from '@angular/core';
// Interfaces
import { Libro, Categoria } from '../libreria.model';
// Services
import { LibreriaService } from '../libreria.service';


@Component({
  selector: 'app-listado-libros',
  templateUrl: './listado-libros.component.html',
  styleUrls: ['./listado-libros.component.css']
})
export class ListadoLibrosComponent implements OnInit {
  // Atributos
  libros: Libro[];

  constructor(private libreriaService: LibreriaService) { // Servicio por parametro
    this.libros = this.libreriaService.getLibros();
  }

  ngOnInit(): void {
  }

}
