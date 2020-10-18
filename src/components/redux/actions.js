import {
  DISPLAY_MORE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ITEM_ADDED_TO_CART,
} from "./types";

export const display_more_action = (id) => {
  return {
    type: DISPLAY_MORE,
    payload: id,
  };
};

export const add_to_cart_action = (guitar) => {
  return {
    type: ADD_TO_CART,
    payload: guitar,
  };
};

export const remove_from_cart_action = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const item_added_to_cart_action = () => {
  return {
    type: ITEM_ADDED_TO_CART,
  };
};
