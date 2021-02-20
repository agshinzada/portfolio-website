import { combineReducers } from "redux";
import portfolioListReducer from "./portfolioListReducer";
import filterListReducer from "./filterListReducer";
const reducers = combineReducers({
  portfolioListReducer,
  filterListReducer,
});

export default reducers;
