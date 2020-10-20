import React from "react";

function Item({ item }) {
  return (
    <tr>
      <td>{item.index}</td>
      <td>{item.name}</td>
      <td>{`${item.price} $`}</td>
      <td>{item.quantity}</td>
      <td>{`${item.total} $`}</td>
    </tr>
  );
}

export default Item;
