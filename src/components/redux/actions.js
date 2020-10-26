import {
  DISPLAY_MORE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ITEM_ADDED_TO_CART,
  BUY_ITEM,
  PERSONAL_INFORMATION,
  REMOVE_ALL_FROM_CART,
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

export const personal_info_action = (info) => {
  return {
    type: PERSONAL_INFORMATION,
    payload: info,
  };
};

export const buy_item_action = (id, name, price, quantity, total) => {
  return {
    type: BUY_ITEM,
    payload: {
      id: id,
      name: name,
      price: price,
      quantity: quantity,
      total: total,
    },
  };
};

export const remove_all_from_cart_action = () => {
  return {
    type: REMOVE_ALL_FROM_CART,
  };
};
