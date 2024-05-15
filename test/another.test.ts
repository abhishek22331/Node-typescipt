import { mul } from './multi.ts';

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