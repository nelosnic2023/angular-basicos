
import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent { 

 // personajes:Personaje[] = [];

  nuevo: Personaje = {
    nombre:'Rochy',
    poder:1000
  };

  constructor( ){ 
    
  }
  // get personajes():Personaje[]{
  //   return this.dbzService.personajes;
  // }

  // agregarNuevoPersonaje( argument : Personaje ) {
  //   this.personajes.push(argument);
  //   console.log(argument)
  // }
  
  

  // constructor( private dbzService: DbzService ){ 
  //   this.personajes = this.dbzService.personajes;
  //  }
}
