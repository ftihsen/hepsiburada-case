import * as Actions from '../actions';

const initialState = {
  data: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_MY_BASKET:
      return {
        ...state,
        data: [...action.payload],
      };
    case Actions.ADD_TO_CART:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case Actions.DELETE_CART:
      return {
        ...state,
        data: [...state.data.filter((t) => t.productId !== action.payload.productId)],
      };
    default:
      return state;
  }
};

export default basketReducer;
