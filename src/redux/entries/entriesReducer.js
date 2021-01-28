import {
  BUY_BEEFONARA,
  BUY_LASAGNA,
  BUY_PANZEROTTI,
  RETURN_BEEFONARA,
  RETURN_LASAGNA,
  RETURN_PANZEROTTI,
} from "./entriesTypes";

const initialState = {
  numOfOrderedLasagna: 0,
  numOfOrderedPanzerotti: 0,
  numOfOrderedBeefonara: 0,
};

const entriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_LASAGNA:
      return {
        ...state,
        numOfOrderedLasagna: state.numOfOrderedLasagna + action.payload,
      };

    case BUY_PANZEROTTI:
      return {
        ...state,
        numOfOrderedPanzerotti: state.numOfOrderedPanzerotti + action.payload,
      };

    case BUY_BEEFONARA:
      return {
        ...state,
        numOfOrderedBeefonara: state.numOfOrderedBeefonara + action.payload,
      };

    case RETURN_LASAGNA:
      return {
        ...state,
        numOfOrderedLasagna:
          state.numOfOrderedLasagna <= 0
            ? 0
            : state.numOfOrderedLasagna - action.payload,
      };

    case RETURN_PANZEROTTI:
      return {
        ...state,
        numOfOrderedPanzerotti:
          state.numOfOrderedPanzerotti <= 0
            ? 0
            : state.numOfOrderedPanzerotti - action.payload,
      };

    case RETURN_BEEFONARA:
      return {
        ...state,
        numOfOrderedBeefonara:
          state.numOfOrderedBeefonara <= 0
            ? 0
            : state.numOfOrderedBeefonara - action.payload,
      };

    default:
      return state;
  }
};

export default entriesReducer;
