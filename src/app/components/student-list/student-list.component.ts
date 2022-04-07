import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StudentService} from "../../services/student.service";
import {Router} from "@angular/router";

const baseUrl = 'http://localhost:8000/api';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: any = [];
  data: any = [];

  constructor(private http: HttpClient, private studentService: StudentService, private router: Router) {
    this.http.get(`${baseUrl}/student`).subscribe({
      next: (res) => {
        this.data = res;
        this.students = this.data.data;
      },
      error: (e) => console.error(e)
    });
  }

  ngOnInit(): void {
  }

  deleteStudent(id: any) {
    if (confirm('Delete Student?'))
      this.studentService.delete(id).subscribe({
        next: (res) => {
          this.router.navigateByUrl(this.router.url)
        }
      });
  }

}
