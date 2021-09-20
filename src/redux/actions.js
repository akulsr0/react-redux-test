import store from "./store";
import { NUM_TYPES, STRING_TYPES } from "./types";

export const NumActions = {
  add(n = 1) {
    store.dispatch({ type: NUM_TYPES.ADD, payload: { n } });
  },
  sub(n = 1) {
    store.dispatch({ type: NUM_TYPES.SUB, payload: { n } });
  }
};

export const StringActions = {
  uppercase() {
    store.dispatch({ type: STRING_TYPES.UPPERCASE });
  },
  lowercase() {
    store.dispatch({ type: STRING_TYPES.LOWERCASE });
  }
};
