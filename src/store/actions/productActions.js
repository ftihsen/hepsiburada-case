export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const FILTER_PRODUCT = 'FILTER_PRODUCT';
export const SEARCH_PRODUCT = 'SEARCH_PRODUCT';
export const RESET_SEARCH = 'RESET_SEARCH';

export function getProduct() {
  return (dispatch) => {
    dispatch({
      type: GET_ALL_PRODUCT,
      payload: JSON.parse(window.localStorage.getItem('productList')),
    });
  };
}

export function updateProduct(params) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_PRODUCT,
      payload: params,
    });
  };
}

export function searchProduct(params) {
  return (dispatch) => {
    dispatch({
      type: SEARCH_PRODUCT,
      payload: params.toLocaleLowerCase(),
    });
  };
}

export function resetSearch(params) {
  return (dispatch) => {
    dispatch({
      type: RESET_SEARCH,
    });
  };
}

export function filterProduct(params) {
  return (dispatch) => {
    dispatch({
      type: FILTER_PRODUCT,
      payload: params,
    });
  };
}
