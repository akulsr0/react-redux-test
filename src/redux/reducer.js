import { combineReducers } from "redux";
import { numState, stringState } from "./state";
import { NUM_TYPES, STRING_TYPES } from "./types";

function numReducer(state = numState, action) {
  switch (action.type) {
    case NUM_TYPES.ADD:
      return { ...state, c: state.c + action.payload.n };
    case NUM_TYPES.SUB:
      return { ...state, c: state.c - action.payload.n };
    default:
      return state;
  }
}

function stringReducer(state = stringState, action) {
  switch (action.type) {
    case STRING_TYPES.UPPERCASE:
      return { ...state, s: state.s.toUpperCase() };
    case STRING_TYPES.LOWERCASE:
      return { ...state, s: state.s.toLowerCase() };
    default:
      return state;
  }
}

export default combineReducers({ numReducer, stringReducer });
