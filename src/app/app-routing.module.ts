import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddStudentComponent} from "./components/add-student/add-student.component";
import {StudentDetailsComponent} from "./components/student-details/student-details.component";
import {StudentListComponent} from "./components/student-list/student-list.component";
import {EditStudentComponent} from "./components/edit-student/edit-student.component";
import {UserLoginComponent} from "./components/user-login/user-login.component";
import {UserRegisterComponent} from "./components/user-register/user-register.component";
import {AuthStateService} from "./services/auth-state.service";

const routes: Routes = [
  {path: '', redirectTo: 'students', pathMatch: 'full'},
  {path: 'students', component: StudentListComponent, canActivate: [AuthStateService]},
  {path: 'students/:id', component: StudentDetailsComponent, canActivate: [AuthStateService]},
  {path: 'students/:id/edit', component: EditStudentComponent, canActivate: [AuthStateService]},
  {path: 'add', component: AddStudentComponent, canActivate: [AuthStateService]},
  {path: 'register', component: UserRegisterComponent},
  {path: 'login', component: UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
