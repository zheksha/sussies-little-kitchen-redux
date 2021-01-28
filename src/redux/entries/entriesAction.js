import {
  BUY_BEEFONARA,
  BUY_LASAGNA,
  BUY_PANZEROTTI,
  RETURN_BEEFONARA,
  RETURN_LASAGNA,
  RETURN_PANZEROTTI,
} from "./entriesTypes";

export const buyLasagna = (itemNumber = 1) => {
  return {
    type: BUY_LASAGNA,
    payload: itemNumber,
  };
};

export const buyPanzerotti = (itemNumber = 1) => {
  return {
    type: BUY_PANZEROTTI,
    payload: itemNumber,
  };
};

export const buyBeefonara = (itemNumber = 1) => {
  return {
    type: BUY_BEEFONARA,
    payload: itemNumber,
  };
};

export const returnLasagna = (itemNumber = 1) => {
  return {
    type: RETURN_LASAGNA,
    payload: itemNumber,
  };
};

export const returnPanzerotti = (itemNumber = 1) => {
  return {
    type: RETURN_PANZEROTTI,
    payload: itemNumber,
  };
};

export const returnBeefonara = (itemNumber = 1) => {
  return {
    type: RETURN_BEEFONARA,
    payload: itemNumber,
  };
};
