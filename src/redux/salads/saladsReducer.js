import {
  BUY_GARDEN_SALAD,
  BUY_CEASARS_SALAD,
  RETURN_GARDEN_SALAD,
  RETURN_CEASARS_SALAD,
} from "./saladsTypes";

const initialState = {
  numOfOrderedGarden: 0,
  numOfOrderedCeasars: 0,
};

const saladReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_GARDEN_SALAD:
      return {
        ...state,
        numOfOrderedGarden: state.numOfOrderedGarden + action.payload,
      };

    case RETURN_GARDEN_SALAD:
      return {
        ...state,
        numOfOrderedGarden:
          state.numOfOrderedGarden <= 0
            ? 0
            : state.numOfOrderedGarden - action.payload,
      };

    case BUY_CEASARS_SALAD:
      return {
        ...state,
        numOfOrderedCeasars: state.numOfOrderedCeasars + action.payload,
      };

    case RETURN_CEASARS_SALAD:
      return {
        ...state,
        numOfOrderedCeasars:
          state.numOfOrderedCeasars <= 0
            ? 0
            : state.numOfOrderedCeasars - action.payload,
      };
    default:
      return state;
  }
};

export default saladReducer;
