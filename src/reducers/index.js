import { combineReducers } from 'redux';

import { TOGGLE_MENU, TOGGLE_MODAL } from '../actions';

const initialState = {
  openMenu: true,
  openModal: false
};

function toggle(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        openMenu: !state.openMenu
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        openModal: !state.openModal
      };
    default:
      return state;
  }
}

export default combineReducers({
  toggle
});
