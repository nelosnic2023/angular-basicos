import { Injectable } from "@angular/core";
import { caracter } from "../interfaces/caracter.interface";
import { v4 as uuid } from 'uuid'
@Injectable(
  {
    providedIn: 'root'
  }
)
export class DbzService{
  public caracteres: caracter[] = [{
    id: uuid(),
    nombre: 'Krilin',
    poder: 1000
  },{
    id: uuid(),
    nombre: 'Goten',
    poder: 5
  },{
    id: uuid(),
    nombre: 'Vegeta',
    poder: 6000
  },{
    id: uuid(),
    nombre: 'Yaucha',
    poder: 500
  },{
    id: uuid(),
    nombre: 'Tenchijan',
    poder: 1000
  }];

  onNuevoCaracter( caracter : caracter ): void {

    const nuevoCaracter: caracter = {id: uuid(), ...caracter
      // id: uuid(),
      // nombre: caracter.nombre,
      // poder: caracter.poder
    };

    this.caracteres.push(nuevoCaracter); //se agregara al final del arreglo.
  }
  EliminarCaracterId(id: string){
    this.caracteres = this.caracteres.filter(p => p.id !== id);
  }
  // onEliminarCaracter( index : number ) {

  //   this.caracteres.splice(index,1); //se agregara al final del arreglo.
  // }
}
