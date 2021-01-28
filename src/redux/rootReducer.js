import { combineReducers } from "redux";
import orderListReducer from "./orderList/orderListReducer";
import soupsReducer from "./soups/soupsReducer";
import saladReducer from "./salads/saladsReducer";
import entriesReducer from "./entries/entriesReducer";

const rootReducer = combineReducers({
  order: orderListReducer,
  soups: soupsReducer,
  salads: saladReducer,
  entries: entriesReducer,
});

export default rootReducer;
