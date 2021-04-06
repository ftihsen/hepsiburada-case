import { isEqualObj } from 'utils/helpers';
import * as Actions from '../actions';

const initialState = {
  sort: {},
};

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SORT_PRODUCT:
      return {
        ...state,
        sort: !isEqualObj(state.sort, action.payload) ? action.payload : {},
      };
    default:
      return state;
  }
};

export default sortReducer;
