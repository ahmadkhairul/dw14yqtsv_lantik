import { createStore, combineReducers, applyMiddleware } from "redux";
import auth from "../_reducers/auth";
import ticket from "../_reducers/ticket";
import order from "../_reducers/order";
import station from "../_reducers/station";
import setdata from "../_reducers/setdata";
import { logger, promise } from "../middleware";

// Global state
const rootReducers = combineReducers({
  auth,
  ticket,
  order,
  station,
  setdata
});

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
