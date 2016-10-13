// Project imports
// NOTE: PUT API URL into BASE_URL
// const BASE_URL = '';

// ****** MENU ACTIONS
export const TOGGLE_MENU = 'TOGGLE_MENU';

export function toggleMenu() {
  document.body.classList.toggle('menu-active');
  return {
    type: TOGGLE_MENU,
  };
}
