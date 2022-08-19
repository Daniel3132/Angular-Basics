import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../listado-personas/persona.model';

@Component({
  selector: 'app-persona-l',
  templateUrl: './persona-l.component.html',
  styleUrls: ['./persona-l.component.css']
})
export class PersonaLComponent implements OnInit {

  @Input() persona: Persona; //es de tipo persona
  @Input() indice: number;


  constructor() { }

  ngOnInit(): void {
  }

}
