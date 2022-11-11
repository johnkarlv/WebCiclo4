import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from '../admin/rutas/create/create.component';
import { EditComponent } from '../admin/rutas/edit/edit.component';
import { GetComponent } from '../admin/rutas/get/get.component';

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
export class RutasRoutingModule { }
