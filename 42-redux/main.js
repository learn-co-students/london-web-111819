const store = Redux.createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
window.ReduxStore = store;

store.subscribe(() => {
  const state = store.getState();

  counterEl.innerText = state.counter;
  keyEl.innerText = state.key;
});
