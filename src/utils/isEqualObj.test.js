const { isEqualObj } = require('./helpers');

test('parity check of objects', () => {
  const dataOne = { id: 1, direction: 'asc', selectorName: 'price', text: 'En Düşük Fiyat' };
  const dataTwo = { id: 1, direction: 'asc', selectorName: 'price', text: 'En Düşük Fiyat' };
  const result = true;
  expect(isEqualObj(dataOne, dataTwo)).toEqual(result);
});
