// Third Party imports
import { combineReducers } from 'redux';

// Project imports
import {
  TOGGLE_MENU,
} from '../actions';

function menu(state = { open: false }, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return { ...state, open: !state.open };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  menu,
});

export default rootReducer;
