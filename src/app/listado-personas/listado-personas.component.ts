import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';


@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent {

  public titulo = 'Listado de personas';
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Sara', 'Muñoz')
  ];
  nombreInput: string = '';
  apellidoInput: string = '';

  agregarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push(persona1);
  }
}
