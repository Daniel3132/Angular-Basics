import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from './persona.model';


@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css'],
  providers:[LoggingService]
})
export class ListadoPersonasComponent {

  public titulo = 'Listado de personas';

  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Sara', 'Muñoz')
  ];

  constructor(private LoggingService:LoggingService){}

  personaAgregada(persona: Persona) {
    this.LoggingService.enviarMensajeAConsola("Agregamos una persona")
    this.personas.push(persona);
  }
}
