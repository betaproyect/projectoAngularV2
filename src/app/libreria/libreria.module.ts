// General
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


// Components
import { AltaLibroComponent } from './alta-libro/alta-libro.component';
import { ListadoLibrosComponent } from './listado-libros/listado-libros.component';
import { BajaLibroComponent } from './baja-libro/baja-libro.component';
import { ModificarLibroComponent } from './modificar-libro/modificar-libro.component';

// Services
import { LibreriaService } from './libreria.service';

@NgModule({
  declarations: [
    AltaLibroComponent,
    ListadoLibrosComponent,
    BajaLibroComponent,
    ModificarLibroComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LibreriaService
  ],
  exports: [ //Exportamos para llevarlo a la raiz
    ListadoLibrosComponent,
    AltaLibroComponent,
    BajaLibroComponent,
    ModificarLibroComponent,
  ]
})
export class LibreriaModule { }
