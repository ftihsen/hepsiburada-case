import { updateProduct } from './productActions';

export const GET_MY_BASKET = 'GET_MY_BASKET';
export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_CART = 'DELETE_CART';

export function getMyBasket(params) {
  const basket = JSON.parse(window.localStorage.getItem('basket'));
  return {
    type: GET_MY_BASKET,
    payload: basket || [],
  };
}

export function addToCart(params) {
  const productList = JSON.parse(window.localStorage.getItem('productList'));
  const data = productList.map((obj) => (obj.productId === params.productId ? params : obj));
  localStorage.setItem('productList', JSON.stringify(data));
  const basket = JSON.parse(window.localStorage.getItem('basket'));
  localStorage.setItem('basket', JSON.stringify([...(basket || []), { ...params }]));

  return (dispatch) => {
    dispatch(updateProduct(params));
    dispatch({
      type: ADD_TO_CART,
      payload: params,
    });
  };
}

export function deleteCart(params) {
  const productList = JSON.parse(window.localStorage.getItem('productList'));
  const data = productList.map((obj) => (obj.productId === params.productId ? params : obj));
  localStorage.setItem('productList', JSON.stringify(data));

  const basket = JSON.parse(window.localStorage.getItem('basket'));
  localStorage.setItem(
    'basket',
    JSON.stringify(basket.filter((t) => t.productId !== params.productId)),
  );

  return (dispatch) => {
    dispatch(updateProduct(params));
    dispatch({
      type: DELETE_CART,
      payload: params,
    });
  };
}
