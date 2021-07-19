import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger/src";
import { flightsReducer } from "./reduicers/flightsReducer";
import thunk from "redux-thunk";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  flightsReducer,
  applyMiddleware(thunk, logger)
);
