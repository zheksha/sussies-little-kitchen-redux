import {
  BUY_BEAN,
  BUY_LENTIL,
  BUY_TOMATO,
  RETURN_BEAN,
  RETURN_LENTIL,
  RETURN_TOMATO,
} from "./soupsTypes";

export const buyLentil = (itemNumber = 1) => {
  return {
    type: BUY_LENTIL,
    payload: itemNumber,
  };
};

export const returnLentil = (itemNumber = 1) => {
  return {
    type: RETURN_LENTIL,
    payload: itemNumber,
  };
};
export const buyTomato = (itemNumber = 1) => {
  return {
    type: BUY_TOMATO,
    payload: itemNumber,
  };
};

export const returnTomato = (itemNumber = 1) => {
  return {
    type: RETURN_TOMATO,
    payload: itemNumber,
  };
};
export const buyBean = (itemNumber = 1) => {
  return {
    type: BUY_BEAN,
    payload: itemNumber,
  };
};

export const returnBean = (itemNumber = 1) => {
  return {
    type: RETURN_BEAN,
    payload: itemNumber,
  };
};
