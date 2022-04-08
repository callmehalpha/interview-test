import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../services/student.service";
import {ActivatedRoute} from "@angular/router";
import Player from "@vimeo/player";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student: any = [];
  player!: Player;

  constructor(private studentService: StudentService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.studentService.get(this.route.snapshot.paramMap.get('id')).subscribe({
      next: (res) => {
        this.student = res;
        let vimeo_id = this.student.course.vimeo_id;
        setTimeout(() => {
          this.player = new Player('handstick', {
            id: Number(vimeo_id),
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
            .loadVideo('http://vimeo.com/video/' + vimeo_id)
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
