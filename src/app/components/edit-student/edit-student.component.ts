import {Component, OnInit} from '@angular/core';
import {Student} from "../../models/student.model";
import {StudentService} from "../../services/student.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

const baseUrl = 'http://localhost:8002/api';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  student: Student = {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    gender: '',
    course_id: 0,
  };
  courses: any = [];

  constructor(private studentService: StudentService, private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.http.get(`${baseUrl}/courses`).subscribe({
      next: (res) => {
        this.courses = res;
      },
      error: (e) => console.error(e)
    });
    this.studentService.get(this.route.snapshot.paramMap.get('id')).subscribe({
      next: (res) => {
        this.student = res;
        // console.log(res)
      },
      error: (e) => console.error(e)
    });
  }

  ngOnInit(): void {
  }

  updateStudent(): void {
    const data = {
      firstname: this.student.firstname,
      lastname: this.student.lastname,
      gender: this.student.gender,
      password: this.student.password,
      email: this.student.email,
      course_id: this.student.course_id
    };
    this.studentService.update(this.student.id, data)
      .subscribe({
        next: (res) => {
          this.router.navigate(['/students']);
          console.log(res);

        },
        error: (e) => console.error(e)
      });
  }

}
