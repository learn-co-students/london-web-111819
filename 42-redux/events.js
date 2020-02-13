const downButton = document.querySelector("#down");
const upButton = document.querySelector("#up");
const counterEl = document.querySelector("#counter-value");
const keyEl = document.querySelector("#key-value");

downButton.addEventListener("click", () =>
  store.dispatch({ type: ACTION_TYPES.COUNT_DOWN })
);
upButton.addEventListener("click", () =>
  store.dispatch({ type: ACTION_TYPES.COUNT_UP })
);

document.addEventListener("keydown", e =>
  store.dispatch({ type: ACTION_TYPES.KEY_PRESS, payload: { key: e.key } })
);
