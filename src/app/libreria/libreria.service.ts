import { Injectable } from '@angular/core';
import { Usuario, Libro, Categoria } from './libreria.model'; //Interfaces importadas

@Injectable({
  providedIn: 'root'
})
export class LibreriaService {
  //Atributos
  private usuarios: Usuario[];
  private libros: Libro[];
  private categrias: Categoria[];

  //Constructor directo
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
    this.libros = [
      {
        id: 1,
        titulo: "Subidón",
        autor: "Joaquín Reyes",
        categoria: 1
      },
      {
        id: 2,
        titulo: "Vive como un mendigo, baila como un rey",
        autor: "Ignatius Farray",
        categoria: 1
      },
      {
        id: 3,
        titulo: "Besos prohibidos",
        autor: "Noelia Amarillo",
        categoria: 1
      },
      {
        id: 4,
        titulo: "Reír es la única salida: El mejor libro de humor de Buenafuente 2020'",
        autor: "Andreu Buenafuente",
        categoria: 1
      },
      {
        id: 5,
        titulo: "¡A la mierda el príncipe azul! Yo quiero un lobo que me coma mejor",
        autor: "Anabel Garcia",
        categoria: 1
      },
      {
        id: 6,
        titulo: "Guía del club de lectura para matar vampiros",
        autor: "Grady Hendrix",
        categoria: 2
      },
      {
        id: 7,
        titulo: "Los sonámbulos",
        autor: "Chuck Wendig",
        categoria: 2
      },
      {
        id: 8,
        titulo: "The Book of Accidents",
        autor: "Chuck Wendig",
        categoria: 2
      },
      {
        id: 9,
        titulo: "Whisper Down the Lane",
        autor: "Clay McLeod Chapman",
        categoria: 2
      },
      {
        id: 10,
        titulo: "What Big Teeth",
        autor: "Rose Szabo",
        categoria: 2
      },
      {
        id: 11,
        titulo: "Antes de diciembre",
        autor: "Grady Hendrix",
        categoria: 3
      },
      {
        id: 12,
        titulo: "¿Un último baile, milady?",
        autor: "Megan Maxwell",
        categoria: 3
      },
      {
        id: 13,
        titulo: "Te espero en el fin del mundo",
        autor: "Andrea Longarela",
        categoria: 3
      },
      {
        id: 14,
        titulo: "Hay momentos que deberían ser eternos",
        autor: "Megan Maxwell",
        categoria: 3
      },
      {
        id: 15,
        titulo: "Solo Un Amor de Verano",
        autor: "Alexandra Roma",
        categoria: 3
      },
      {
        id: 16,
        titulo: "El instinto",
        autor: "Ashley Audrain",
        categoria: 4
      },
      {
        id: 17,
        titulo: "Ojalá ésta fuera nuestra historia de amor",
        autor: "Andrea LongarelaAndrea Longarela",
        categoria: 4
      },
      {
        id: 18,
        titulo: "El silencio de nuestras palabras: Premio DeA Planeta Italia 2019",
        autor: "Simona Sparaco",
        categoria: 4
      },
      {
        id: 19,
        titulo: "Drama",
        autor: "Raina Telgemeier",
        categoria: 4
      },
      {
        id: 20,
        titulo: "Dramas históricos",
        autor: "William Shakespeare",
        categoria: 4
      }
    ]
    this.categrias = [
      {
        id: 1,
        nombre: "Comedia"
      },
      {
        id: 2,
        nombre: "Terror"
      },
      {
        id: 3,
        nombre: "Romance"
      },
      {
        id: 4,
        nombre: "Drama"
      }
    ]
  }

  getUsuarios() {
    return this.usuarios;
  }

  getLibros() {
    return this.libros;
  }

  getCategorias() {
    return this.categrias;
  }

  //Solo componente AltaLibro
  agregarLibro(libro: Libro): void {
    this.libros.push(libro);
  }

  //Solo para componente de AltaLibro
  addLibro(): Libro {
    return {
      id: (this.libros.length) + 1,
      titulo: "",
      autor: "",
      categoria: 0
    }
  }

  //Componentes BajaLibro y ModificarLibro
  selectLibro(): Libro {
    return {
      id: 0,
      titulo: "",
      autor: "",
      categoria: 0
    };

  }

  //Componente BajaLibro
  deleteLibro(id: number): void {
    id = id - 1;
    this.libros.splice(id, 1);
  }

  //Componente ModificarLibro
  modifylibro(nuevo: Libro): void {
    for (let libro of this.libros) {
      if (libro.id == nuevo.id) {
        libro.titulo = nuevo.titulo;
        libro.autor = nuevo.autor;
        libro.categoria = nuevo.categoria;
      }
    }
  }

}
