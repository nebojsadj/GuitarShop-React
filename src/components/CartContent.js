import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { remove_from_cart_action, buy_item_action } from "../redux/actions";
import { MdDeleteForever } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";

function CartContent({ guitar, index }) {
  const [quantity, setQuantity] = useState(1);
  const { id, name, img, price } = guitar;
  const dispatch = useDispatch();
  const buy = useSelector((state) => state.guitars.buy);

  return (
    <tr className="bg-light">
      <td className="mTab">{index + 1}</td>
      <td className="mTab">{name}</td>
      <td>
        <Image src={`/imgs/${img}.jpg`} alt="img" width="90" />
      </td>
      <td className="mTab">{`${price} $`}</td>
      <td>
        <Button
          disabled={quantity === 1}
          onClick={() => setQuantity((quantity) => quantity - 1)}
          className="btn btn-warning btn-sm"
        >
          -
        </Button>
      </td>
      <td>
        <div className="quantity mTab">{quantity}</div>
      </td>
      <td>
        <Button
          onClick={() => setQuantity((quantity) => quantity + 1)}
          className="btn btn-warning btn-sm"
        >
          +
        </Button>
      </td>
      <td className="mTab">{`${quantity * price} $`}</td>

      <td>
        <Button
          onClick={() => {
            dispatch(remove_from_cart_action(id));
          }}
          className="btn btn-danger btn-sm"
        >
          <MdDeleteForever size="1.6em" />
        </Button>
      </td>
      <td>
        <Button
          disabled={buy.map((el) => el.name).includes(name)}
          onClick={() => {
            dispatch(
              buy_item_action(id, name, price, quantity, quantity * price)
            );
          }}
          className="btn btn-primary btn-sm mTab"
        >
          <FaCartArrowDown size="1.6em" />
        </Button>
      </td>
    </tr>
  );
}

export default CartContent;
