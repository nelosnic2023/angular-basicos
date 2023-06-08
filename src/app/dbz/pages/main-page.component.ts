import { Component} from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { caracter } from '../interfaces/caracter.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
  constructor (private dbzService : DbzService){ }

  get caracteres(): caracter[]{
    return [...this.dbzService.caracteres];
  }

  onEliminarCaracter(id:string):void{
    this.dbzService.EliminarCaracterId(id);
  }

  onNuevoCaracter(caracter:caracter):void{
    this.dbzService.onNuevoCaracter(caracter);
  }

}
