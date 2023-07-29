import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAllComponent } from './components/get-all/get-all.component';
import { GetByIdComponent } from './components/get-by-id/get-by-id.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';



@NgModule({
  declarations: [
     GetAllComponent,
    GetByIdComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GetAllComponent
  ]
})
export class DepartemntsModule { }
