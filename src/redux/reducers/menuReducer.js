import * as actionTypes from "../actions/actionTypes";

export default function menuReducer(state = false, action) {
  switch (action.type) {
    case actionTypes.CHANGE_MENU:
      return action.payload;

    default:
      return state;
  }
}
