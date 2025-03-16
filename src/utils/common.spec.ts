import { equal, ok } from 'assert';
import { random } from '@utils/common';

describe('Random', () => {
  it('should return random number between min and max', () => {
    const min = 100;
    const max = 120;
    const num = random(min, max);
    ok(
      num >= 100 && num <= 120,
      `random value must be between ${min} and ${max}`
    );
  });
  it('should respect min and max inclusive', () => {
    const min = 100;
    const max = 100;
    const num = random(min, max);
    equal(num, min, `random value must be between ${min} and ${max}`);
  });
});
