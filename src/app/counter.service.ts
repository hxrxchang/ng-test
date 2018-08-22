import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public point: BehaviorSubject<number> = new BehaviorSubject(0);
  constructor() { }

  increment(num: number) {
    const current = this.point.getValue();
    this.point.next(current + num);
  }

  decrement(num: number) {
    const current = this.point.getValue();
    this.point.next(current - num);
  }
}
