import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove_from_cart_action, buy_item_action } from "./redux/actions";

function CartContent({ guitar, index }) {
  const [quantity, setQuantity] = useState(1);
  const { id, name, img, price } = guitar;
  const dispatch = useDispatch();
  const buy = useSelector((state) => state.guitars.buy);

  return (
    <tr className="bg-light">
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>
        <img src={`/imgs/${img}.jpg`} alt="img" width="90" />
      </td>
      <td>{`${price} $`}</td>
      <td>
        <button
          disabled={quantity === 1}
          onClick={() => setQuantity((quantity) => quantity - 1)}
          className="btn btn-warning btn-sm"
        >
          -
        </button>
      </td>
      <td>
        <div className="quantity">{quantity}</div>
      </td>
      <td>
        <button
          onClick={() => setQuantity((quantity) => quantity + 1)}
          className="btn btn-warning btn-sm"
        >
          +
        </button>
      </td>
      <td>{`${quantity * price} $`}</td>

      <td>
        <button
          onClick={() => {
            dispatch(remove_from_cart_action(id));
          }}
          className="btn btn-danger btn-sm"
        >
          Remove
        </button>
      </td>
      <td>
        <button
          disabled={buy.map((el) => el.name).includes(name)}
          onClick={() => {
            dispatch(buy_item_action(name, price, quantity, quantity * price));
          }}
          className="btn btn-primary btn-sm"
        >
          Buy $
        </button>
      </td>
    </tr>
  );
}

export default CartContent;
