import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function loadModalReducer(state = initialState.modalItem, action) {
  switch (action.type) {
    case actionTypes.LOAD_PORTFOLIO_MODAL:
      return action.payload;

    default:
      return state;
  }
}
