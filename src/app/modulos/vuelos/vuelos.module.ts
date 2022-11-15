import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VuelosRoutingModule } from './vuelos-routing.module';
import { CreateComponent } from '../admin/vuelos/create/create.component';
import { EditComponent } from '../admin/vuelos/edit/edit.component';
import { GetComponent } from '../admin/vuelos/get/get.component';

@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    GetComponent
  ],
  imports: [
    CommonModule,
    VuelosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VuelosModule { }