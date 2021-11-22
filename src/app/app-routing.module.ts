import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { PersonComponent } from './component/person/person.component';
import { StudentComponent } from './component/student/student.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { TeachermanagementComponent } from './component/teachermanagement/teachermanagement.component';
import { TeacherlistComponent } from './component/teacherlist/teacherlist.component';
import { UpdateStudentComponent } from './component/update-student/update-student.component';
import { UpdateteacherComponent } from './component/updateteacher/updateteacher.component';
import { AdminComponent } from './component/admin/admin.component';


const routes: Routes = [

  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"person",component:PersonComponent},
  {path:"register",component:RegistrationComponent},
  {path:"student",component:StudentComponent},
  {path:"Studentlist",component:StudentlistComponent},
  {path:"teacher",component:TeachermanagementComponent},
  {path:"teacherlist",component:TeacherlistComponent},
  {path:"updatestudent/:id",component:UpdateStudentComponent},
  {path:"updateteacher/:id",component:UpdateteacherComponent},
  {path:"admin",component:AdminComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
