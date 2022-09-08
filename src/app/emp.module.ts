import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EmpRoutingModule } from "./emp-routing.module";
import { EmployeeCreateComponent } from "./employee-create/employee-create.component";
import { EmployeeEditComponent } from "./employee-edit/employee-edit.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";

@NgModule({
    declarations: [EmployeeCreateComponent,
        EmployeeEditComponent],
    imports: [
      CommonModule,
      FormsModule,
        ReactiveFormsModule,
      EmpRoutingModule
    ]
  })
  export class EmpModule { }