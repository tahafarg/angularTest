import { AddDepartmentViewModel } from './../../shared/ViewModels/AddDepartmentViewModel';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResultViewModel } from 'src/app/shared/ViewModels/ResultViewModel';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient ) { 

  }

  addDepartment (model : AddDepartmentViewModel) {
    return this.http.post<ResultViewModel>("https://localhost:50001/Department/Add",model)
  }

  getDepartment () {
    return this.http.get<ResultViewModel>(`https://localhost:50001/Department/GetDepartments`)
  }
}
