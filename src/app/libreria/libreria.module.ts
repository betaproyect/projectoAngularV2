// General
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { AltaLibroComponent } from './alta-libro/alta-libro.component';

// Services
import { LibreriaService } from './libreria.service';
import { ListadoLibrosComponent } from './listado-libros/listado-libros.component';


@NgModule({
  declarations: [
    AltaLibroComponent,
    ListadoLibrosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    LibreriaService
  ],
  exports: [ //Exportamos para llevarlo a la raiz
    AltaLibroComponent,
    ListadoLibrosComponent
  ]
})
export class LibreriaModule { }
