const initialState = {
  bots: [],
  botArmyIds: [],
  selectedBotId: null
};

const reducer = (state = initialState, action) => {
  if (action.type === "SET_BOTS")
    return {
      ...state,
      bots: action.payload.bots
    };
  if (action.type === "SELECT_BOT")
    return {
      ...state,
      selectedBotId: action.payload.bot.id
    };
  if (action.type === "CLEAR_SELECTED_BOT")
    return {
      ...state,
      selectedBotId: null
    };
  if (action.type === "ENLIST_BOT")
    return {
      ...state,
      botArmyIds: [...state.botArmyIds, action.payload.bot.id]
    };
  if (action.type === "DELIST_BOT")
    return {
      ...state,
      botArmyIds: state.botArmyIds.filter(
        botId => botId !== action.payload.bot.id
      )
    };
  return {
    ...state
  };
};

export default reducer;
