import { combineReducers } from "redux";
import portfolioListReducer from "./portfolioListReducer";
import loadModalReducer from "./loadModalReducer";
import displayModalReducer from "./displayModalReducer";
import menuReducer from "./menuReducer";
const reducers = combineReducers({
  portfolioListReducer,
  loadModalReducer,
  displayModalReducer,
  menuReducer,
});

export default reducers;
