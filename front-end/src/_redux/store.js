import { createStore, combineReducers, applyMiddleware } from "redux";
import auth from "../_reducers/auth";
import user from "../_reducers/user";
import ticket from "../_reducers/ticket";
import { logger, promise } from "../middleware";

// Global state
const rootReducers = combineReducers({
  auth,
  user,
  ticket
});

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
