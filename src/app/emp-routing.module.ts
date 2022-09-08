import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeCreateComponent } from "./employee-create/employee-create.component";
import { EmployeeEditComponent } from "./employee-edit/employee-edit.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";


const routes: Routes = [
    { path: '', component: EmployeeCreateComponent },  
    { path: ':id', component: EmployeeEditComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class EmpRoutingModule { }