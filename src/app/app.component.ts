import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public point: number;

  constructor(
    private counterService: CounterService
  ) {
  }

  ngOnInit() {
    const pointSub = this.counterService.point.subscribe(
      value => {
        if (value || value === 0) {
          this.point = value;
        }
      }
    )
  }

  increment() {
    this.counterService.increment(3);
  }

  decrement() {
    this.counterService.decrement(2);
  }
}
