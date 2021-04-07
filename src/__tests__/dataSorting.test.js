const { dataSorting } = require('../utils/helpers');

test('data sorting', () => {
  const data = [
    {
      id: '1',
      brand: 'Apple',
      price: 12000,
    },
    {
      id: '2',
      brand: 'LG',
      price: 9085,
    },
  ];
  const sort = { id: 1, direction: 'asc', selectorName: 'price', text: 'En Düşük Fiyat' };

  const result = [
    {
      id: '2',
      brand: 'LG',
      price: 9085,
    },
    {
      id: '1',
      brand: 'Apple',
      price: 12000,
    },
  ];

  expect(dataSorting(data, sort)).toEqual(result);
});
