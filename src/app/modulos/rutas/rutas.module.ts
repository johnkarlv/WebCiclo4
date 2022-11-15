import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RutasRoutingModule } from './rutas-routing.module';
import { CreateComponent } from '../admin/rutas/create/create.component';
import { EditComponent } from '../admin/rutas/edit/edit.component';
import { GetComponent } from '../admin/rutas/get/get.component';

@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    GetComponent
  ],
  imports: [
    CommonModule,
    RutasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RutasModule { }