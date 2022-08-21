import { EventEmitter, Injectable } from "@angular/core";
import { Persona } from "./listado-personas/persona.model";
import { LoggingService } from "./LoggingService.service";

@Injectable() //para poder utilizar el servicio de logging dentro de el de Personas
export class PersonasService {
    personas: Persona[] = [
        new Persona('Juan', 'Perez'),
        new Persona('Sara', 'Muñoz')
    ];

    saludar = new EventEmitter<number>()

    constructor(private LoggingService: LoggingService) { }

    agregarPersona(persona: Persona) {
        this.LoggingService.enviarMensajeAConsola("Agregamos a la persona " + persona.nombre + " " + persona.apellido);
        this.personas.push(persona);
    }

}