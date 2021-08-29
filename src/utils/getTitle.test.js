import getTitle from "./getTitle";

test('title does not contain special characters in url', () => {
  expect(getTitle('Fast & Furious: 7')).toBe('fast-furious-7');
}); 

test('title does not contain double spaces in url', () => {
  expect(getTitle('Rapid 3.  Go!')).toBe('rapid-3-go');
});