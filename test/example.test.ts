import { sum } from './example.ts'; 
import { mul } from './multi.ts';
describe('sum function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds -1 + 1 to equal 0', () => {
    expect(sum(-1, 1)).toBe(0);
  });

  test('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });


});
describe('mul function', () => {
    test('multiplies 2 * 3 to equal 6', () => {
      expect(mul(2, 3)).toBe(6);
    });
  
    test('multiplies -4 * 5 to equal -20', () => {
      expect(mul(-4, 5)).toBe(-20);
    });
  
    test('multiplies 0 * 100 to equal 0', () => {
      expect(mul(0, 100)).toBe(0);
    });
  
  });