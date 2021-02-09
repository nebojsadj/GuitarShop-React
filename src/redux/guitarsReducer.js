import initState from "./initState";
import {
  DISPLAY_MORE,
  DISPLAY_STRINGS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ITEM_ADDED_TO_CART,
  BUY_ITEM,
  PERSONAL_INFORMATION,
  REMOVE_ALL_FROM_CART,
} from "./types";

function guitarsReducer(state = initState, action) {
  switch (action.type) {
    case DISPLAY_MORE:
      const guitar = state.guitars.filter((el) => el.id === action.payload)[0];
      return { ...state, displayInstrument: guitar };
    case DISPLAY_STRINGS:
      const string = state.strings.filter((el) => el.id === action.payload)[0];
      return { ...state, displayInstrument: string };
    case ADD_TO_CART:
      return {
        ...state,
        inCart: [...state.inCart, action.payload],
      };
    case REMOVE_FROM_CART:
      const inCart = state.inCart.filter((el) => el.id !== action.payload);
      const buy = state.buy.filter((el) => el.id !== action.payload);
      return { ...state, inCart: inCart, buy: buy };
    case ITEM_ADDED_TO_CART:
      const copyInCart = [].concat(state.inCart);
      const item = copyInCart.pop();
      return { ...state, itemAddedToCart: item };
    case PERSONAL_INFORMATION:
      return { ...state, personalInfo: action.payload };
    case BUY_ITEM:
      return { ...state, buy: [...state.buy, action.payload] };
    case REMOVE_ALL_FROM_CART:
      return { ...state, inCart: [], buy: [] };
    default:
      return state;
  }
}

export default guitarsReducer;
