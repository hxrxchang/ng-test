import { CounterService } from './counter.service';

describe('CounterService', () => {
  it('increment() should increase point', () => {
    const service = new CounterService();
    service.increment(3);
    service.point.subscribe(value => {
      expect(value).toBe(3);
    });
  });

  it('decrement() should decrease point', () => {
    const service = new CounterService();
    service.decrement(2);
    service.point.subscribe(value => {
      expect(value).toBe(-2);
    });
  });
});
