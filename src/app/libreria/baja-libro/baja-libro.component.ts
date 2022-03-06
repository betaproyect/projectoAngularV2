import { Component, OnInit } from '@angular/core';
// Interfaces
import { Libro } from '../libreria.model';
// Services
import { LibreriaService } from '../libreria.service';

@Component({
  selector: 'app-baja-libro',
  templateUrl: './baja-libro.component.html',
  styleUrls: ['./baja-libro.component.css']
})
export class BajaLibroComponent implements OnInit {
  //Atributos
  libro: Libro;
  libros: Libro[];

  constructor(private libreriaService: LibreriaService) { // Servicio por parametro
    this.libro = this.libreriaService.selectLibro();
    this.libros = this.libreriaService.getLibros();
  }

  ngOnInit(): void {
  }

  eliminarLibro() {
    for(let x of this.libros) {
      if (x.id == this.libro.id) {
        this.libreriaService.deleteLibro(x.id);
      }
    }
  }
}
