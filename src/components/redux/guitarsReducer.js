import initState from "./initState";
import {
  DISPLAY_MORE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ITEM_ADDED_TO_CART,
} from "./types";

function guitarsReducer(state = initState, action) {
  switch (action.type) {
    case DISPLAY_MORE:
      const guitar = state.guitars.filter((el) => el.id === action.payload)[0];
      return { ...state, displayInstrument: guitar };
    case ADD_TO_CART:
      return {
        ...state,
        inCart: [...state.inCart, action.payload],
      };
    case REMOVE_FROM_CART:
      const inCart = state.inCart.filter((el) => el.id !== action.payload);
      return { ...state, inCart: inCart };
    case ITEM_ADDED_TO_CART:
      const copyInCart = [].concat(state.inCart);
      const item = copyInCart.pop();
      return { ...state, itemAddedToCart: item };

    default:
      return state;
  }
}

export default guitarsReducer;
