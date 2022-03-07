// Interfaces de Libro
export interface Libro {
  id: number;
  titulo: string;
  autor: string;
  categoria: number;
}

export interface Categoria {
  id: number;
  nombre: string;
}
