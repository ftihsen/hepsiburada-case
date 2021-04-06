import { combineReducers } from 'redux';

import productReducer from './productReducer';
import sortReducer from './sortReducer';
import basketReducer from './basketReducer';

export default combineReducers({
  product: productReducer,
  sort: sortReducer,
  basket: basketReducer,
});
