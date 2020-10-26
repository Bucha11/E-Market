import { itemsApi } from "../../API/API";

const SET_HOME_ITEMS = "SET_HOME_ITEMS";

const initialState = {
  men: [],
  women: [],
  other: [],
  purchase: [],
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOME_ITEMS:
      const { men, women, other, purchase } = action.items;

      debugger;
      return {
        ...state,
        men: [...state.men, ...men],
        women: [...state.women, ...women],
        other: [...state.other, ...other],
        purchase: [...state.purchase, ...purchase],
      };

    default:
      return state;
  }
};

const setItems = (items) => {
  return {
    type: SET_HOME_ITEMS,
    items: items,
  };
};

export const setHomeItems = () => async (dispatch) => {
  debugger;
  const items = await itemsApi.getHomeItems();
  dispatch(setItems(items));
};
