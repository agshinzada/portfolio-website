import * as actionTypes from "./actionTypes";

export function changeMenu(data) {
  return { type: actionTypes.CHANGE_MENU, payload: data };
}
