import { sum } from '../src/client/js/example'
test('adds 12 + 14 to equal 26',() =>{
    expect (sum(12,14)).toBe(26);
})
import { validateStrings } from'../src/client/js/example'
test('validate strings', () => {
    expect(validateStrings("")).toBe(false);
    expect(validateStrings("The wonderful world of Disney")).toBe(true);
  });