import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  //i : number = 0;

  heroeBorrado: string = '';
  estado:boolean = false;
  borrarHeroe(): void {
    // this.i = this.heroes.length - 1;
    // this.heroes.splice(this.i, 1);

    this.heroeBorrado = this.heroes.shift() || '';    
    this.estado = true;
  }
}
