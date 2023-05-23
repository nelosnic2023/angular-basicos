import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

//Declarar prpiedad
  public titulo : string  = 'Hola Mundo';
  public counter : number  = 10;

//Crear un metodo
  increaseBy(valor:number):void {
    this.counter += valor;
  }

//Crear un Evento reset
resetCounter(){
  this.counter = 10;
}

  // decreaseBy():void{
  //   this.counter -= 1;
  // }
}

