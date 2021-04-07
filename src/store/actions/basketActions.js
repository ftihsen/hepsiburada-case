import { asyncLocalStorage } from 'utils/asyncLocalStroge';
import { updateProduct } from './productActions';

export const GET_MY_BASKET = 'GET_MY_BASKET';
export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_CART = 'DELETE_CART';

export function getMyBasket(params) {
  const basket = JSON.parse(window.localStorage.getItem('basket')).reverse();
  return {
    type: GET_MY_BASKET,
    payload: basket || [],
  };
}

export function addToCart(params) {
  asyncLocalStorage.getItem('basket').then((res) => {
    asyncLocalStorage.setItem(
      'basket',
      JSON.stringify([...(JSON.parse(res) || []), { ...params }]),
    );
  });

  return (dispatch) => {
    dispatch(updateProduct(params));
    dispatch({
      type: ADD_TO_CART,
      payload: params,
    });
  };
}

export function deleteCart(params) {
  asyncLocalStorage
    .getItem('productList')
    .then((productList) => JSON.parse(productList))
    .then((res) => res.map((obj) => (obj.productId === params.productId ? params : obj)))
    .then((data) => {
      asyncLocalStorage.setItem('productList', JSON.stringify(data));
    });

  asyncLocalStorage
    .getItem('basket')
    .then((res) => JSON.parse(res))
    .then((data) => {
      asyncLocalStorage.setItem(
        'basket',
        JSON.stringify(data.filter((t) => t.productId !== params.productId)),
      );
    });

  return (dispatch) => {
    dispatch(updateProduct(params));
    dispatch({
      type: DELETE_CART,
      payload: params,
    });
  };
}
