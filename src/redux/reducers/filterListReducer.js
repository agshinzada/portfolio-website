import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function filterListReducer(state = initialState.filter, action) {
  switch (action.type) {
    case actionTypes.GET_FILTER_ITEMS_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
