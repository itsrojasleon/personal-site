export const TOGGLE_MENU = 'TOGGLE_MENU';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const toggleMenu = () => ({
  type: TOGGLE_MENU
});
export const toggleModal = value => ({
  type: TOGGLE_MODAL,
  payload: value
});
