const { priceFormat } = require('../utils/helpers');

test('conversion from number to currency', () => {
  const data = 100.5;
  const result = '100,50';
  expect(priceFormat(data)).toEqual(result);
});
