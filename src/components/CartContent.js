import React, { useState } from "react";

function CartContent({ guitar, index, removeFromCart }) {
  const { id, name, img, price } = guitar;
  const [quantity, setQuantity] = useState(1);

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
          onClick={() => removeFromCart(id)}
          className="btn btn-danger btn-sm"
        >
          remove
        </button>
      </td>
    </tr>
  );
}

export default CartContent;
