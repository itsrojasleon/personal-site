import { combineReducers } from 'redux';

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
  toggle
});
