import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css'],
    /* styles: [`h1{
        color:blue
    }`], */
    //  backtick para que no cuente saltos de linea en caso de querer insertar html
})
export class PersonasComponent {
    deshabilitar = false;
    mensaje = "";
    titulo = 'ingeniero';
    mostrar = false;
    agregarPersona() {
        this.mostrar = true;
        this.mensaje = 'Persona agregada';
    }
    /* modificarTitulo(e: Event) {
        this.titulo = (<HTMLInputElement>e.target).value
    } event binding*/
}