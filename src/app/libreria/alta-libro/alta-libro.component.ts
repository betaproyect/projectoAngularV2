import { Component, OnInit } from '@angular/core';
// Interfaces
import { Libro, Categoria } from '../libreria.model';
// Services
import { LibreriaService } from '../libreria.service';

@Component({
  selector: 'app-alta-libro',
  templateUrl: './alta-libro.component.html',
  styleUrls: ['./alta-libro.component.css']
})
export class AltaLibroComponent implements OnInit {
  //Atributos
  libro: Libro;
  categorias: Categoria[];

  constructor(private libreriaService: LibreriaService) { // Servicio por parametro
    this.libro = this.libreriaService.nuevoLibro();
    this.categorias = this.libreriaService.getCategorias();
  }

  ngOnInit(): void {
  }

  nuevoLibro(): void {
    this.libreriaService.agregarLibro(this.libro);
    this.libro = this.libreriaService.nuevoLibro();
  }

}
