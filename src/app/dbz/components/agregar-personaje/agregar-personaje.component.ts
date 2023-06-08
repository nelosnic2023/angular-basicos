import { Component, EventEmitter,  Output } from '@angular/core';
import { caracter } from '../../interfaces/caracter.interface';

@Component({
  selector: 'dbz-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.css']
})


export class AgregarPersonajeComponent {

  @Output()
  public onNuevoCaracter: EventEmitter<caracter> = new EventEmitter();

  public caracter: caracter = {
    nombre:'Nelson',
    poder:0
  }

  emitirCaracter():void{
    console.log(this.caracter);
    if(this.caracter.nombre.length === 0) return;

    this.onNuevoCaracter.emit(this.caracter);

    // this.caracter.nombre = '';
    // this.caracter.poder = 0;
    this.caracter = {
      nombre: '', poder: 0
    }
  }
}
