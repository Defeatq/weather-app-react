import thunk from "redux-thunk";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import weatherInit from "./reducers";

const store = createStore(
  weatherInit,
  applyMiddleware(
    thunk
  )
);

export default store