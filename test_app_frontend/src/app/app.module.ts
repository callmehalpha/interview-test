import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AddStudentComponent} from './components/add-student/add-student.component';
import {StudentDetailsComponent} from './components/student-details/student-details.component';
import {StudentListComponent} from './components/student-list/student-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {EditStudentComponent} from './components/edit-student/edit-student.component';
import {UserLoginComponent} from './components/user-login/user-login.component';
import {UserRegisterComponent} from './components/user-register/user-register.component';
import {AuthInterceptor} from "./services/auth.interceptor";
import {AddCourseComponent} from "./components/add-course/add-course.component";
import { CourseListComponent } from './components/course-list/course-list.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    StudentDetailsComponent,
    StudentListComponent,
    EditStudentComponent,
    UserLoginComponent,
    UserRegisterComponent,
    AddCourseComponent,
    CourseListComponent,
    EditCourseComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
