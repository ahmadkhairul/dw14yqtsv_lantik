import { createStore, combineReducers, applyMiddleware } from "redux";
import auth from "../_reducers/auth";
import user from "../_reducers/user";
import ticket from "../_reducers/ticket";
import order from "../_reducers/order";
import station from "../_reducers/station";
import { logger, promise } from "../middleware";

// Global state
const rootReducers = combineReducers({
  auth,
  user,
  ticket,
  order,
  station
});

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
