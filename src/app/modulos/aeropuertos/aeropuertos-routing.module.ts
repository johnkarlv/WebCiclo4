import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from '../admin/aeropuertos/create/create.component';
import { EditComponent } from '../admin/aeropuertos/edit/edit.component';
import { GetComponent } from '../admin/aeropuertos/get/get.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent,
  },{
    path: 'edit',
    component: EditComponent,
  },{
    path: 'get',
    component: GetComponent,
  },{
    path: '',
    pathMatch: 'full',
    redirectTo: 'get'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AeropuertosRoutingModule { }
