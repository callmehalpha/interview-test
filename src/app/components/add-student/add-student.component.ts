import {Component, OnInit} from '@angular/core';
import {Student} from "../../models/student.model";
import {StudentService} from "../../services/student.service";
import {HttpClient} from "@angular/common/http";

const baseUrl = 'http://localhost:8000/api';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student: Student = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    gender: '',
    course_id: 0,
  };
  courses: any = [];
  submitted = false;

  constructor(private studentService: StudentService, private http: HttpClient) {
    this.http.get(`${baseUrl}/courses`).subscribe({
      next: (res) => {
        this.courses = res;
      },
      error: (e) => console.error(e)
    });
  }

  ngOnInit(): void {
  }

  saveStudent(): void {
    const data = {
      firstname: this.student.firstname,
      lastname: this.student.lastname,
      gender: this.student.gender,
      password: this.student.password,
      email: this.student.email,
      course_id: this.student.course_id
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
      course_id: 0,
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      gender: ''
    };
  }

}
