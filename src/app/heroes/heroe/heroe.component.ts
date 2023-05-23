import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
    styleUrls: ['./heroe.component.css']
})

export class HeroeComponent{

  // titulo: string= 'Heroe App';
  public nombre : string = 'Ironman';
  public edad: number = 19;

  //crear get que retorna un valor string
  get nombreCapitalizado() : string {
    return this.nombre.toUpperCase();
  }

  // crear un metodo que retorna un string
  obtenerNombre(): string {
    return `${ this.nombre } - ${ this.edad }`;
  }

  cambiarNombre(): void {
    this.nombre = 'SpiderMan';
    this.edad = 100;
  }

  cambiarEdad(): void {
    this.edad = 100;
  }

  resetForm():void{
    this.nombre = 'ironman';
    this.edad = 19;
  }

}
