import { itemsApi } from "../../API/API";

const SET_HOME_ITEMS = "SET_HOME_ITEMS";

const initialState = {
  all:[],
  men: [],
  women: [],
  other: [],
  purchase: [],
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOME_ITEMS:
     
            return {
        ...state,
        all:[...action.items]
 
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

export const setItemsThunk = () => async (dispatch) => {
  debugger;
  const items = await itemsApi.getHomeItems();
  dispatch(setItems(items));
};
