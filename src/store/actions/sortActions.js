export const SORT_PRODUCT = 'SORT_PRODUCT';

export function sortProduct(params) {
  return (dispatch) => {
    dispatch({
      type: SORT_PRODUCT,
      payload: params,
    });
  };
}
