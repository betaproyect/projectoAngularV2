// Interfaz de Usuarios
export interface Usuario {
  id: number;
  usuario: string;
  password: string;
}

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
