import { Component, OnInit } from '@angular/core';
import {Student} from "../../models/student.model";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student: Student = {
    firstname: '',
    lastname : '',
    email : '',
    password : '',
    gender : ''
  };
  submitted = false;
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  saveStudent(): void {
    const data = {
      firstname: this.student.firstname,
      lastname: this.student.lastname,
      gender: this.student.gender,
      password: this.student.password,
      email: this.student.email
    };
    this.studentService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newStudent(): void {
    this.submitted = false;
    this.student = {
      firstname: '',
      lastname : '',
      email : '',
      password : '',
      gender : ''
    };
  }

}
