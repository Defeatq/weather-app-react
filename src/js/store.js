import thunk from "redux-thunk";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import weatherInit from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: weatherInit,
  middleware: [thunk],
});

// const store = createStore(
//   weatherInit,
//   applyMiddleware(
//     thunk
//   )
// );

export default store