import {
  BUY_BEAN,
  BUY_LENTIL,
  BUY_TOMATO,
  RETURN_BEAN,
  RETURN_LENTIL,
  RETURN_TOMATO,
} from "./soupsTypes";

const initialState = {
  numOfOrderedLentil: 0,
  numOfOrderedTomato: 0,
  numOfOrderedBean: 0,
};

const soupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_LENTIL:
      return {
        ...state,
        numOfOrderedLentil: state.numOfOrderedLentil + action.payload,
      };

    case RETURN_LENTIL:
      return {
        ...state,
        numOfOrderedLentil:
          state.numOfOrderedLentil <= 0
            ? 0
            : state.numOfOrderedLentil - action.payload,
      };

    case BUY_TOMATO:
      return {
        ...state,
        numOfOrderedTomato: state.numOfOrderedTomato + action.payload,
      };

    case RETURN_TOMATO:
      return {
        ...state,
        numOfOrderedTomato:
          state.numOfOrderedTomato <= 0
            ? 0
            : state.numOfOrderedTomato - action.payload,
      };

    case BUY_BEAN:
      return {
        ...state,
        numOfOrderedBean: state.numOfOrderedBean + action.payload,
      };

    case RETURN_BEAN:
      return {
        ...state,
        numOfOrderedBean:
          state.numOfOrderedBean <= 0
            ? 0
            : state.numOfOrderedBean - action.payload,
      };

    default:
      return state;
  }
};

export default soupsReducer;
