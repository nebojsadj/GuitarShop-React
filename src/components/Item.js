import React from "react";

function Item({ item }) {
  const { name, price, quantity, total } = item;
  return (
    <tr>
      <td className="mTab">{name}</td>
      <td className="mTab">{`${price} $`}</td>
      <td className="mTab">{quantity}</td>
      <td className="mTab">{`${total} $`}</td>
    </tr>
  );
}

export default Item;
