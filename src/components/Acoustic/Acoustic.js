import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  display_more_action,
  add_to_cart_action,
  item_added_to_cart_action,
} from "../../redux/actions";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Acoustic({ acoustic }) {
  const inCart = useSelector((state) => state.guitars.inCart);
  const idInCart = inCart.map((el) => el.id);
  const dispatch = useDispatch();

  const { id, name, img, price, text } = acoustic;

  return (
    <div className="card mt-4">
      <div className="card-header bg-secondary text-white">{name}</div>
      <div className="card-body">
        <div className="row">
          <div className="col-4">
            <img
              src={`imgs/${img}.jpg`}
              alt="img"
              width="160"
              className="img"
            />
          </div>
          <div className="col-8 font-italic">
            <p>{`${text.substring(0, 220)}...`}</p>
            <div className="col-10">
              <h3 className="float-right price">{`${price} $`}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <Link
          to={"/display"}
          onClick={() => dispatch(display_more_action(id))}
          className="btn btn-info btn-sm float-left"
        >
          Show more
        </Link>
        {idInCart.indexOf(id) === -1 ? (
          <button
            onClick={() => {
              dispatch(add_to_cart_action(acoustic));
              dispatch(item_added_to_cart_action());
            }}
            className="btn btn-danger btn-sm float-right"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            Add to Cart <ShoppingCartIcon />
          </button>
        ) : (
          <button className="btn btn-warning btn-sm float-right">
            In Cart <ShoppingCartIcon />
          </button>
        )}
      </div>
    </div>
  );
}

export default Acoustic;
