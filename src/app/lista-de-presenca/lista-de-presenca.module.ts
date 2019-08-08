import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaDePresencaListComponent } from './lista-de-presenca-list/lista-de-presenca-list.component';
import { ListaDePresencaEditComponent } from './lista-de-presenca-edit/lista-de-presenca-edit.component';
import { ListaDePresencaCreateComponent } from './lista-de-presenca-create/lista-de-presenca-create.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ListaPresencaService } from './shared';



@NgModule({
  declarations: [ListaDePresencaListComponent, ListaDePresencaEditComponent, ListaDePresencaCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers:[
    ListaPresencaService
  ]
})
export class ListaDePresencaModule { }
