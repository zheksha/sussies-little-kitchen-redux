import { UPDATE_CART } from "./orderListTypes";

export const updateCart = (item) => {
  return {
    type: UPDATE_CART,
    payload: item,
  };
};
