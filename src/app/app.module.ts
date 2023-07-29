import { DepartemntsModule } from './departemnts/departemnts.module';
import { DepartmentService } from './departemnts/services/department.service';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetAllComponent } from './departemnts/components/get-all/get-all.component';
import { CommonModule } from '@angular/common';
import { AddComponent } from './departemnts/components/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
  // GetAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CommonModule,
    DepartemntsModule
  ],
  providers: [
    DepartmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
