import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddStudentComponent} from "./components/add-student/add-student.component";
import {StudentDetailsComponent} from "./components/student-details/student-details.component";
import {StudentListComponent} from "./components/student-list/student-list.component";
import {EditStudentComponent} from "./components/edit-student/edit-student.component";
import {UserLoginComponent} from "./components/user-login/user-login.component";
import {UserRegisterComponent} from "./components/user-register/user-register.component";
import {AuthStateService} from "./services/auth-state.service";
import {AddCourseComponent} from "./components/add-course/add-course.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./services/auth.interceptor";
import {AppComponent} from "./app.component";
import {CourseListComponent} from "./components/course-list/course-list.component";
import {EditCourseComponent} from "./components/edit-course/edit-course.component";
import {CourseDetailsComponent} from "./components/course-details/course-details.component";

const routes: Routes = [
  {path: '', redirectTo: 'students', pathMatch: 'full'},
  {path: 'students', component: StudentListComponent, canActivate: [AuthStateService]},
  {path: 'students/:id', component: StudentDetailsComponent, canActivate: [AuthStateService]},
  {path: 'students/:id/edit', component: EditStudentComponent, canActivate: [AuthStateService]},
  {path: 'courses', component: CourseListComponent, canActivate: [AuthStateService]},
  {path: 'courses/:id', component: CourseDetailsComponent, canActivate: [AuthStateService]},
  {path: 'courses/:id/edit', component: EditCourseComponent, canActivate: [AuthStateService]},
  {path: 'create_student', component: AddStudentComponent, canActivate: [AuthStateService]},
  {path: 'create_course', component: AddCourseComponent, canActivate: [AuthStateService]},
  {path: 'register', component: UserRegisterComponent},
  {path: 'login', component: UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppRoutingModule {
}
