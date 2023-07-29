import { ResultViewModel } from './../../../shared/ViewModels/ResultViewModel';
import { DepartmentService } from './../../services/department.service';
import { Component, OnInit } from '@angular/core';
import { DepartmentViewModel } from 'src/app/shared/ViewModels/DepartmentViewModel';
// import { isPlatformBrowser } from '@angular/common' ,Inject, PLATFORM_ID   @Inject(PLATFORM_ID) private platformId: Object;

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css'],
  
})
export class GetAllComponent implements OnInit {
  Departments: DepartmentViewModel[] =[];
  // isBrowser: boolean = false;

  constructor(private service:DepartmentService) { }
  

  ngOnInit(): void {
   
    this.getAllDepartment();
//this.hostUrl();
    

    // if (isPlatformBrowser(this.platformId)) {
    //   this.loadScripts();
    // }
    
  }

  getAllDepartment(){
    this.service.getDepartment().subscribe(res=>{
      if(res.success){
    this.Departments = res.data.data as DepartmentViewModel[];
      console.log(res.data.data);
console.log(this.Departments);
      
    }
    //else

    })
  }

//   private hostUrl(){
//      const fontUrl = 'https://preview.keenthemes.com/metronic8/demo1/assets/plugins/global/fonts/@fortawesome/fa-solid-900.ttf';
// const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';

// const proxiedFontUrl = corsProxyUrl + fontUrl;
//   }

  // private loadScripts() {
  //   const scripts = [
  //     'https://preview.keenthemes.com/metronic8/demo1/assets/plugins/custom/datatables/datatables.bundle.js',
  //     'https://preview.keenthemes.com/metronic8/demo1/assets/js/custom/apps/ecommerce/customers/listing/listing.js',
  //     'https://preview.keenthemes.com/metronic8/demo1/assets/js/custom/apps/ecommerce/customers/listing/add.js',
  //     'https://preview.keenthemes.com/metronic8/demo1/assets/js/custom/apps/ecommerce/customers/listing/export.js',
  //     'https://preview.keenthemes.com/metronic8/demo1/assets/js/widgets.bundle.js',
  //     'https://preview.keenthemes.com/metronic8/demo1/assets/js/custom/widgets.js',
  //     'https://preview.keenthemes.com/metronic8/demo1/assets/js/custom/apps/chat/chat.js',
  //     'https://preview.keenthemes.com/metronic8/demo1/assets/js/custom/utilities/modals/upgrade-plan.js',
  //     'https://preview.keenthemes.com/metronic8/demo1/assets/js/custom/utilities/modals/create-app.js',
  //     'https://preview.keenthemes.com/metronic8/demo1/assets/js/custom/utilities/modals/users-search.js'
  //   ];
  
  //   scripts.forEach(scriptUrl => {
  //     const script = document.createElement('script');
  //     script.src = scriptUrl;
  //     document.head.appendChild(script);
  //   });
  // }
}
