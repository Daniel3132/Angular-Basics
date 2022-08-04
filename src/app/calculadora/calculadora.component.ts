import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado = 0;
  ocultar = true;
  sumarNum() {
    this.resultado = this.numero1 + this.numero2;
    this.ocultar = false;
  }

}
