import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from '../admin/vuelos/create/create.component';
import { EditComponent } from '../admin/vuelos/edit/edit.component';
import { GetComponent } from '../admin/vuelos/get/get.component';
import { SessionGuard } from 'src/app/guards/session.guard';

const routes: Routes = [
  {
    path: 'create',
    canActivate: [SessionGuard],
    component: CreateComponent,
  },{
    path: 'edit/:id',
    canActivate: [SessionGuard],
    component: EditComponent,
  },{
    path: 'get',
    canActivate: [SessionGuard],
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
export class VuelosRoutingModule { }
