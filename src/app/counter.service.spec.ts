import { CounterService } from './counter.service';

describe('CounterService', () => {
  it('increment() should increase point', () => {
    const service = new CounterService();
    service.increment(3);
    service.point.subscribe(value => {
      expect(value).toBe(3);
    });
  });
});
