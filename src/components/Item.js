import React from "react";

function Item({ item }) {
  const { name, price, quantity, total } = item;
  return (
    <tr>
      <td>{name}</td>
      <td>{`${price} $`}</td>
      <td>{quantity}</td>
      <td>{`${total} $`}</td>
    </tr>
  );
}

export default Item;
