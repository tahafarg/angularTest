import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavSideComponent } from './component/navbar/nav-side.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './component/sidebar/sidebar.component';



@NgModule({
  declarations: [
    NavSideComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    NavSideComponent ,
    SidebarComponent,
    
  ]
})
export class SharedModule { }
