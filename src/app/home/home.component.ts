import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from './../counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public point: number;

  constructor(
    private counterService: CounterService
  ) {
    this.subscription = new Subscription();
  }

  ngOnInit() {
    const pointSub = this.counterService.point.subscribe(
      value => {
        if (value || value === 0) {
          this.point = value;
        }
      }
    )
    this.subscription.add(pointSub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  increment() {
    this.counterService.increment(3);
  }

  decrement() {
    this.counterService.decrement(2);
  }
}
