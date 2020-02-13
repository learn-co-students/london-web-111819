const counter = (state = 0, action) => {
  console.log("counter reducer");
  if (action.type === ACTION_TYPES.COUNT_DOWN) {
    return state - 1;
  } else if (action.type === ACTION_TYPES.COUNT_UP) {
    return state + 1;
  }
  return state;
};

const key = (state = "press a key", action) => {
  console.log("key reducer");
  if (action.type === ACTION_TYPES.KEY_PRESS) {
    return action.payload.key;
  }
  if (action.type === ACTION_TYPES.COUNT_DOWN) {
    return "press a key";
  }
  return state;
};

const combinedReducers = Redux.combineReducers({
  counter,
  key
});
