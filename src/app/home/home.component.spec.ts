import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CounterService } from './../counter.service';
import { BehaviorSubject } from 'rxjs';

describe('HomeComponent', () => {
  const CounterServiceMock = {
    point: new BehaviorSubject(0),
    increment: () => void (0)
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
      providers: [
        { provide: CounterService, useValue: CounterServiceMock }
      ]
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have point value', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app.point).toEqual(0);
  });

  it('should render point', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const pTag = compiled.querySelector('#p');
    expect(pTag.textContent).toContain(`Point: 0`);
    const service = fixture.debugElement.injector.get(CounterService);
    service.point.next(3);
    fixture.detectChanges();
    expect(pTag.textContent).toContain(`Point: 3`);
  });

  it('should call increment', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const service = fixture.debugElement.injector.get(CounterService);
    spyOn(service, 'increment');
    const compiled = fixture.debugElement.nativeElement;
    const incrementBtn = compiled.querySelector('#increment-btn');
    incrementBtn.click();
    expect(service.increment).toHaveBeenCalledTimes(1);
    expect(service.increment).toHaveBeenCalledWith(3);
  });
});
