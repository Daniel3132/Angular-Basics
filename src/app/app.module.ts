import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { PersonaLComponent } from './persona-l/persona-l.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PersonasService } from './personas.services';
import { LoggingService } from './LoggingService.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent,
    CalculadoraComponent,
    ListadoPersonasComponent,
    PersonaLComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoggingService,PersonasService], //aqui tambien se pueden inyectar los servicios haciendose de manera global y no solo del componente
  bootstrap: [AppComponent]
})
export class AppModule { }
