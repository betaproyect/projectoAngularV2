// General
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { AltaLibroComponent } from './alta-libro/alta-libro.component';

// Services
import { LibreriaService } from './libreria.service';
import { ListadoLibrosComponent } from './listado-libros/listado-libros.component';
import { BajaLibroComponent } from './baja-libro/baja-libro.component';
import { ModificarLibroComponent } from './modificar-libro/modificar-libro.component';


@NgModule({
  declarations: [
    AltaLibroComponent,
    ListadoLibrosComponent,
    BajaLibroComponent,
    ModificarLibroComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    LibreriaService
  ],
  exports: [ //Exportamos para llevarlo a la raiz
    ListadoLibrosComponent,
    AltaLibroComponent,
    BajaLibroComponent,
    ModificarLibroComponent
  ]
})
export class LibreriaModule { }
