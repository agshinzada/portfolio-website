import { combineReducers } from "redux";
import portfolioListReducer from "./portfolioListReducer";
import filterListReducer from "./filterListReducer";
import loadModalReducer from "./loadModalReducer";
import openModalReducer from "./openModalReducer";
import menuReducer from "./menuReducer";
const reducers = combineReducers({
  portfolioListReducer,
  filterListReducer,
  loadModalReducer,
  openModalReducer,
  menuReducer,
});

export default reducers;
