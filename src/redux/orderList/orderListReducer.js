import { ItemPrices } from "../../components/menu/prices";
import { UPDATE_CART } from "./orderListTypes";

const initialState = { orderedList: [], totalOrderedSum: 0 };

const orderListReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CART:
      console.clear();
      console.log("Orders Submited:");
      for (const [key, value] of Object.entries(action.payload)) {
        if (value > 0) {
          console.log(`${key}: ${value}`);
        }
      }
      return { ...state, orderedList: action.payload };

    default:
      return state;
  }
};

export default orderListReducer;
