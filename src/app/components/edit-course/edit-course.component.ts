import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../../services/course.service";
import {Course} from "../../models/course.model";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  course: Course = {
    id: '',
    course_title: '',
    course_code: 0,
    vimeo_id: 0
  };

  constructor(
    private courseService: CourseService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) {

    this.courseService.get(this.route.snapshot.paramMap.get('id')).subscribe({
      next: (res) => {
        this.course = res;
        // console.log(res)
      },
      error: (e) => console.error(e)
    });
  }

  ngOnInit(): void {
  }

  updateCourse(): void {
    const data = {
      course_title: this.course.course_title,
      course_code: this.course.course_code,
      vimeo_id: this.course.vimeo_id
    };
    this.courseService.update(this.course.id, data)
      .subscribe({
        next: (res) => {
          this.router.navigate(['/courses']);
        },
        error: (e) => console.error(e)
      });
  }

}
