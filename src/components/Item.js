import React from "react";

function Item({ item }) {
  const { index, name, price, quantity, total } = item;
  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{`${price} $`}</td>
      <td>{quantity}</td>
      <td>{`${total} $`}</td>
    </tr>
  );
}

export default Item;
