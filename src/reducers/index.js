import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';

import { TOGGLE_MENU } from '../actions';

function toggle(state = true, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return !state;
    default:
      return state;
  }
}

export default combineReducers({
  loadingBar: loadingBarReducer,
  toggle,
});