import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {CourseService} from "../../services/course.service";

const baseUrl = 'http://localhost:8000/api';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: any = [];
  data: any = [];

  constructor(private http: HttpClient, private courseService: CourseService, private router: Router) {
    this.http.get(`${baseUrl}/course`).subscribe({
      next: (res) => {
        this.data = res;
        this.courses = this.data.data;
      },
      error: (e) => console.error(e)
    });
  }

  ngOnInit(): void {
  }

  deleteStudent(id: any) {
    if (confirm('Delete Student?'))
      this.courseService.delete(id).subscribe({
        next: (res) => {
          this.router.navigateByUrl(this.router.url)
        }
      });
  }

}
