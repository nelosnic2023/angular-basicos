import { Component, Input, EventEmitter, Output } from '@angular/core';
import { caracter } from '../../interfaces/caracter.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public caracterLista : caracter[] = [{
    nombre: 'Trunk',
    poder: 10
  }]

  @Output()
  public onEliminar: EventEmitter<string> = new EventEmitter();

  onEliminarCaracter(id?:string):void{

    if(!id){return;}

    //Tod : Emitir el ID del Personaje
    this.onEliminar.emit(id);
  }
}
