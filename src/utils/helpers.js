import { productList } from 'mocks/productList';
import { asyncLocalStorage } from './asyncLocalStroge';

const setFirstData = async () => {
  asyncLocalStorage
    .getItem('productList')
    .then((res) => JSON.parse(res))
    .then((product) => {
      if (!product) {
        localStorage.setItem('productList', JSON.stringify(productList));
      } else {
        asyncLocalStorage
          .getItem('basket')
          .then((basket) => JSON.parse(basket))
          .then((basketData) => unionBy(product, basketData, 'id'))
          .then((res) => localStorage.setItem('productList', JSON.stringify([...res])));
      }
    });
};

const unionBy = (a, b, p) =>
  a
    .filter((aa) => !b.find((bb) => aa[p] === bb[p]))
    .concat(b)
    .sort((a, b) => (1 * a[p] > 1 * b[p] ? 1 : 1 * b[p] > 1 * a[p] ? -1 : 0));

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

export { isEqualObj, dataSorting, priceFormat, setFirstData, unionBy };
