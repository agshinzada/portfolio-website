import * as actionTypes from "../actions/actionTypes";

export default function loadModalReducer(state = null, action) {
  switch (action.type) {
    case actionTypes.LOAD_PORTFOLIO_MODAL:
      return action.payload;

    default:
      return state;
  }
}
