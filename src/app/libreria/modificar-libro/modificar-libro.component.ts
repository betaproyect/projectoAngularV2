import { Component, OnInit } from '@angular/core';
// Interfaces
import { Libro, Categoria } from '../libreria.model';
// Services
import { LibreriaService } from '../libreria.service';

@Component({
  selector: 'app-modificar-libro',
  templateUrl: './modificar-libro.component.html',
  styleUrls: ['./modificar-libro.component.css']
})
export class ModificarLibroComponent implements OnInit {
  //Atributos
  libro: Libro;
  libros: Libro[];
  categorias: Categoria[];

  constructor(private libreriaService: LibreriaService) { // Servicio por parametro
    this.libro = this.libreriaService.selectLibro();
    this.libros = this.libreriaService.getLibros();
    this.categorias = this.libreriaService.getCategorias();
  }

  ngOnInit(): void {
  }

  modificarLibro() {
    for(let nuevo of this.libros) {
      if (nuevo.id == this.libro.id) {
        this.libreriaService.modifylibro(this.libro);
      }
    }
  }

}
