import * as actionTypes from "../actions/actionTypes";

export default function displayModalReducer(state = false, action) {
  switch (action.type) {
    case actionTypes.OPEN_PORTFOLIO_MODAL:
      return action.payload;

    default:
      return state;
  }
}
