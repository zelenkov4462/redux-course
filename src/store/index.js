import { applyMiddleware, combineReducers, createStore } from "redux";
import { cashReducer } from "./CashReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { customerReducer } from "./CustomerReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
