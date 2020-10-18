import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { remove_from_cart_action } from "./redux/actions";

function CartContent({ guitar, index }) {
  const [quantity, setQuantity] = useState(1);
  const { id, name, img, price } = guitar;
  const dispatch = useDispatch();

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
          onClick={() => dispatch(remove_from_cart_action(id))}
          className="btn btn-danger btn-sm"
        >
          remove
        </button>
      </td>
    </tr>
  );
}

export default CartContent;
