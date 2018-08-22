import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromCounter from './actions/counter.actions';

interface AppState {
  count: {
    number: number
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public point: number;
  public count$: Observable<number>

  constructor(
    private store: Store<AppState>
  ) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit() {
    const countSub = this.count$.subscribe(val => {
      this.point = val;
    });
  }

  increment() {
    this.store.dispatch(new fromCounter.Increment(3));
  }

  decrement() {
    this.store.dispatch(new fromCounter.Decrement(2));
  }
}
