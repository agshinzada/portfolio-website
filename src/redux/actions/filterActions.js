import * as actionTypes from "./actionTypes";

export function getFilterItemsSuccess(data) {
  return { type: actionTypes.GET_FILTER_ITEMS_SUCCESS, payload: data };
}
