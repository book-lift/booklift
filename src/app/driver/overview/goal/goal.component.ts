import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  @Input() private radius: number;
  @Input() private stroke: number;
  @Input() private progress: number;

  get strokeDashOffset(): number {
    return (this.circumference - (this.progress / 100) * this.circumference);
  }

  get normalizedRadius(): number {
    return this.radius - (this.stroke * 2);
  }

  get circumference(): number {
    return this.normalizedRadius * 2 * Math.PI;
  }

  constructor() { }

  ngOnInit() {

  }

}