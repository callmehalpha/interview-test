import {Component, OnInit} from '@angular/core';
import {Course} from "../../models/course.model";
import {CourseService} from "../../services/course.service";

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  course: Course = {
    course_title: '',
    course_code: 0,
    vimeo_id: 0
  }
  submitted?: boolean;

  constructor(private studentService: CourseService) {

  }

  saveCourse(): void {
    const data = {
      course_title: this.course.course_title,
      course_code: this.course.course_code,
      vimeo_id: this.course.vimeo_id
    };
    this.studentService.create(data)
      .subscribe({
        next: (res) => {
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newCourse(): void {
    this.submitted = false;
    this.course = {
      course_title: '',
      course_code: 0,
      vimeo_id: 0
    };
  }

  ngOnInit(): void {
  }

}
