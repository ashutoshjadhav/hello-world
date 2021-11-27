import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit{

  empid:any="";
  aa:boolean=false;
  username:any;
  password:any;

  employee:any =[{
    name: 'Ashutosh',
    sirname: 'Jadhav',
    empid:'1',
    designation: 'Manager',
    accessstatus:'active'
  },{
    name: 'Narendra',
    sirname: 'Modi',
    empid:'12',
    designation: 'PM',
    accessstatus:'inactive'
  },{
    name: 'manda',
    sirname: 'Gokhale',
    empid:'123',
    designation: 'Dancer',
    accessstatus:'active'
  },{
    name: 'Amardeep',
    sirname: 'Jadhav',
    empid:'1234',
    designation: 'Engineer',
    accessstatus:'inactive'
  }];

  ngOnInit(){
      this.username = sessionStorage.getItem('email');
      this.password = sessionStorage.getItem('password');
  }

  setIndex(ii:any){
    this.aa=ii;
  }

  changeStatus(i: any) {
    this.employee.forEach((obj: any, index: any) => {
      if (index === i) {
        if (obj.accessstatus === 'active') {
          obj.accessstatus = 'inactive';
        } else {
          obj.accessstatus = 'active';
        }
      }
    });
  }
}
