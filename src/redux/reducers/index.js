import { combineReducers } from "redux";
import portfolioListReducer from "./portfolioListReducer";
import filterListReducer from "./filterListReducer";
import loadModalReducer from "./loadModalReducer";
import displayModalReducer from "./displayModalReducer";
import menuReducer from "./menuReducer";
const reducers = combineReducers({
  portfolioListReducer,
  filterListReducer,
  loadModalReducer,
  displayModalReducer,
  menuReducer,
});

export default reducers;
