import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  public nombreHeroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  public heroeEliminado: string = '';
  //i : number = 0;

  heroeBorrado: string = '';
  estado:boolean = false;


  borrarHeroe(): void {
    // this.i = this.heroes.length - 1;
    // this.heroes.splice(this.i, 1);

    this.heroeBorrado = this.nombreHeroes.pop() || '';


    // this.heroeBorrado = this.nombreHeroes.shift() || '';
    // this.estado = true;
  }
}
