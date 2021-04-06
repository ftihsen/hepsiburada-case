const isEqualObj = (a, b) => {
  const objIsEqual = Object.entries(a).toString() === Object.entries(b).toString();
  return objIsEqual;
};

const dataSorting = (productList = [], sort = {}) => {
  let data = [...productList];
  if (sort.id) {
    data.sort((a, b) =>
      a[sort.selectorName] > b[sort.selectorName]
        ? sort.direction === 'asc'
          ? 1
          : -1
        : b[sort.selectorName] > a[sort.selectorName]
        ? sort.direction === 'asc'
          ? -1
          : 1
        : 0,
    );
  }
  return data;
};

const priceFormat = (price) => {
  const currency_symbol = '₺';
  return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' })
    .format(price)
    .replace(currency_symbol, '');
};

export { isEqualObj, dataSorting, priceFormat };
