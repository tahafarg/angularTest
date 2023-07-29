import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './departemnts/components/add/add.component';
import { EditComponent } from './departemnts/components/edit/edit.component';
import { GetAllComponent } from './departemnts/components/get-all/get-all.component';

const routes: Routes = [
  {path: 'Departements', component: GetAllComponent},
  {path: 'Department/Add', component: AddComponent},
  {path: 'Department/Edit/:id', component: EditComponent},
  {path:"**",redirectTo:"Departements",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
