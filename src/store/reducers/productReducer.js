import { isEqualObj } from 'utils/helpers';
import * as Actions from '../actions';

const initialState = {
  data: [],
  sideBarData: [],
  sideBarFilterData: {},
  search: '',
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_PRODUCT:
      return {
        ...state,
        data: action.payload,
        sideBarData: action.payload,
      };
    case Actions.UPDATE_PRODUCT:
      return {
        ...state,
        data: [
          ...state.data.map((t) =>
            t.productId === action.payload.productId ? { ...action.payload } : t,
          ),
        ],
      };
    case Actions.SEARCH_PRODUCT:
      return {
        ...state,
        search: action.payload,
        sideBarFilterData: {},
        data: [
          ...state.sideBarData.filter((product) => {
            return (
              product.color.toLocaleLowerCase().includes(action.payload) ||
              product.brand.toLocaleLowerCase().includes(action.payload) ||
              product.title.toLocaleLowerCase().includes(action.payload) ||
              product.brand.toLocaleLowerCase().includes(action.payload)
            );
          }),
        ],
      };
    case Actions.RESET_SEARCH:
      return {
        ...state,
        search: '',
        data: state.sideBarData,
      };
    case Actions.FILTER_PRODUCT:
      return {
        ...state,
        sideBarFilterData: !isEqualObj(state.sideBarFilterData, action.payload)
          ? action.payload
          : {},
        data: !isEqualObj(state.sideBarFilterData, action.payload)
          ? [
              ...state.sideBarData.filter(
                (t) => t[action.payload.selectorName] === action.payload.id,
              ),
            ]
          : state.sideBarData,
      };
    default:
      return state;
  }
};

export default productReducer;
