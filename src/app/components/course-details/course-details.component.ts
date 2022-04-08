import {Component, OnInit} from '@angular/core';
import Player from "@vimeo/player";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../services/course.service";

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: any = [];
  player!: Player;

  constructor(private courseService: CourseService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.courseService.get(this.route.snapshot.paramMap.get('id')).subscribe({
      next: (res) => {
        this.course = res;
        setTimeout(() => {
          this.player = new Player('handstick', {
            id: Number(this.course.vimeo_id),
            width: 640,
            // Use default values for settings, to test typings
            autopause: true,
            autoplay: false,
            background: false,
            byline: true,
            color: '#00adef',
            controls: false,
            dnt: false,
            keyboard: true,
            loop: false,
            muted: false,
            pip: false,
            playsinline: true,
            portrait: true,
            responsive: false,
            speed: false,
            title: false,
            transparent: true,
          });

          this.player
            .loadVideo('http://vimeo.com/video/' + this.course.vimeo_id)
        });
      },
      error: (e) => console.error(e)
    });
  }

  play(): void {
    this.player.play();
  }

  pause(): void {
    this.player.pause();
  }

  stop(): void {
    this.player.pause();
  }
}
