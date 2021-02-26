import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function openModalReducer(state = false, action) {
  switch (action.type) {
    case actionTypes.OPEN_PORTFOLIO_MODAL:
      return action.payload;

    default:
      return state;
  }
}
