import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component'
import { ListComponent } from './components/list/list.component';
import { DbzService } from './services/dbz.service';
import { AgregarPersonajeComponent } from './components/agregar-personaje/agregar-personaje.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AgregarPersonajeComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    DbzService
  ]
})
export class DbzModule { }
