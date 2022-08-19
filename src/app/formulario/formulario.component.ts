import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Persona } from '../listado-personas/persona.model';
import { LoggingService } from '../LoggingService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [LoggingService] // se tiene que usar el provider aparte de inyectar el servicio
})
export class FormularioComponent implements OnInit{

  @Output() personaCreada = new EventEmitter<Persona>()

  // nombreInput: string = '';
  // apellidoInput: string = '';
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(private LoggingService:LoggingService){} //se inyecta el servicio

  ngOnInit(): void {}

  agregarPersona() {
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    this.LoggingService.enviarMensajeAConsola("Enviamos persona con nombre: " + persona1.nombre + " y apellido: " + persona1.apellido);
    this.personaCreada.emit(persona1)
  }

}
