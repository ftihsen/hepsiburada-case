const { unionBy } = require('./helpers');

test('merge as uniq name', () => {
  const data = [
    {
      id: '1',
      isAddedBasket: false,
      currentPrice: 16000,
      discountRate: 20,
    },
    {
      id: '2',
      isAddedBasket: false,
      currentPrice: 400,
      discountRate: 20,
    },
  ];

  const dataTwo = [
    {
      id: '1',
      isAddedBasket: true,
      currentPrice: 16000,
      discountRate: 20,
    },
  ];

  const result = [
    {
      id: '1',
      isAddedBasket: true,
      currentPrice: 16000,
      discountRate: 20,
    },
    {
      id: '2',
      isAddedBasket: false,
      currentPrice: 400,
      discountRate: 20,
    },
  ];
  expect(unionBy(data, dataTwo, 'id')).toEqual(result);
});
