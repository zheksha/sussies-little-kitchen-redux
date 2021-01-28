import {
  BUY_GARDEN_SALAD,
  BUY_CEASARS_SALAD,
  RETURN_GARDEN_SALAD,
  RETURN_CEASARS_SALAD,
} from "./saladsTypes";

export const buyGardenSalad = (itemNumber = 1) => {
  return {
    type: BUY_GARDEN_SALAD,
    payload: itemNumber,
  };
};
export const returnGardenSalad = (itemNumber = 1) => {
  return {
    type: RETURN_GARDEN_SALAD,
    payload: itemNumber,
  };
};
export const buyCeasarsSalad = (itemNumber = 1) => {
  return {
    type: BUY_CEASARS_SALAD,
    payload: itemNumber,
  };
};
export const returnCeasarsSalad = (itemNumber = 1) => {
  return {
    type: RETURN_CEASARS_SALAD,
    payload: itemNumber,
  };
};
