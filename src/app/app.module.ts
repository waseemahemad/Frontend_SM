import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { PersonComponent } from './component/person/person.component';
import { BasicAuthHttpInterceptorServiceService } from './basic-auth-http-interceptor-service.service';
import { provideRoutes } from '@angular/router';
import { StudentComponent } from './component/student/student.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { TeachermanagementComponent } from './component/teachermanagement/teachermanagement.component';
import { TeacherlistComponent } from './component/teacherlist/teacherlist.component';
import { UpdateStudentComponent } from './component/update-student/update-student.component';
import { UpdateteacherComponent } from './component/updateteacher/updateteacher.component';
import { AdminComponent } from './component/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    PersonComponent,
    StudentComponent,
    StudentlistComponent,
    TeachermanagementComponent,
    TeacherlistComponent,
    UpdateStudentComponent,
    UpdateteacherComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // For Spring Security only (Login,Person)
    {
    provide:HTTP_INTERCEPTORS,
    useClass:BasicAuthHttpInterceptorServiceService,
    multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
