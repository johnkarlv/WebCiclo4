import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AeropuertosRoutingModule } from './aeropuertos-routing.module';
import { CreateComponent } from '../admin/aeropuertos/create/create.component';
import { EditComponent } from '../admin/aeropuertos/edit/edit.component';
import { GetComponent } from '../admin/aeropuertos/get/get.component';

@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    GetComponent
  ],
  imports: [
    CommonModule,
    AeropuertosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AeropuertosModule { }