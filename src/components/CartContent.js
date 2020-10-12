import React, { useState } from "react";

function CartContent({ guitar, index, removeFromCart }) {
  console.log(guitar);

  const [quantity, setQuantity] = useState(1);

  return (
    <tr className="bg-light">
      <td>{index + 1}</td>
      <td>{guitar.name}</td>
      <td>
        <img src={`/imgs/${guitar.img}.jpg`} alt="img" width="90" />
      </td>
      <td>{`${guitar.price} $`}</td>
      <td>
        <button
          onClick={() => setQuantity((quantity) => quantity + 1)}
          className="btn btn-warning btn-sm"
        >
          {quantity}
        </button>
      </td>
      <td>total</td>

      <td>
        <button
          onClick={() => removeFromCart(guitar.id)}
          className="btn btn-danger btn-sm"
        >
          remove
        </button>
      </td>
    </tr>
  );
}

export default CartContent;
