import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.services';
import { Persona } from './persona.model';


@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css'],
  providers:[LoggingService] // se puede tener aqui tanto como en el app.module (estaria de forma global)
})
export class ListadoPersonasComponent implements OnInit {

  public titulo = 'Listado de personas';

  personas: Persona[] = [];

  constructor(private LoggingService:LoggingService,
    private personasService: PersonasService){}

    ngOnInit(): void {
        this.personas = this.personasService.personas;
    }

}
