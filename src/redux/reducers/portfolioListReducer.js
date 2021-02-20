import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function portfolioListReducer(
  state = initialState.portfolio,
  action
) {
  switch (action.type) {
    case actionTypes.GET_PORTFOLIO_ITEMS_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
