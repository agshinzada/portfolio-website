import * as actionTypes from "./actionTypes";

export function getPortfolioSuccess(data) {
  return { type: actionTypes.GET_PORTFOLIO_ITEMS_SUCCESS, payload: data };
}

export function getData(filter) {
  return async function (dispatch) {
    const resp = await fetch("json/portfolio.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    let data = await resp.json();
    if (filter) {
      switch (filter) {
        case "HTML/CSS":
          data = data.filter((item) => item.filter === "HTML");
          break;
        case "Java":
          data = data.filter((item) => item.filter === "Java");
          break;
        case "Javascript":
          data = data.filter((item) => item.filter === "Javascript");
          break;
        case "pin":
          data = data.filter((item) => item.pin === 1);
          break;
        default:
          break;
      }
    }
    return dispatch(getPortfolioSuccess(data));
  };
}
