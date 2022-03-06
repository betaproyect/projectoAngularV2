import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Componentes
import { AppComponent } from './app.component';

// Modulos
import { LibreriaModule } from './libreria/libreria.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibreriaModule //Modulo entero
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
