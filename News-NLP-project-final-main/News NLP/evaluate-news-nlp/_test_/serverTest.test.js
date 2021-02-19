import {  modulo } from '../src/server/serverTest'
test('divides 12  and 5 with the remainder 2 ',() =>{
    expect (modulo(12,5)).toBe(2);
});
import { multiply } from'../src/server/serverTest'
test('multiply 2 *3  with the answer 6', () => {
    expect(multiply(2,3)).toBe(6);
    
  });