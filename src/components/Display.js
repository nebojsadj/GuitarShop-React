import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_to_cart_action, item_added_to_cart_action } from "./redux/actions";
import { useHistory } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Display() {
  const display = useSelector((state) => state.guitars.displayInstrument);
  const inCart = useSelector((state) => state.guitars.inCart);
  const idInCart = inCart.map((el) => el.id);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id, name, img, text, price, description } = display;

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <div className="card">
            <div className="card-header bg-secondary text-light">
              <h3>{name || history.push("/")}</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-10">
                  <img src={`/imgs/${img}.jpg`} alt="img" width="100%" />
                </div>
                <div className="col-2">
                  <div>
                    <div className="price">{`Our price: ${price} $`}</div>
                  </div>
                  {idInCart.indexOf(id) === -1 ? (
                    <button
                      onClick={() => {
                        dispatch(add_to_cart_action(display));
                        dispatch(item_added_to_cart_action());
                      }}
                      className="btn btn-danger add"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      Add to Cart <ShoppingCartIcon />
                    </button>
                  ) : (
                    <>
                      <h2 className="bg-warning text-center add">
                        In Cart <ShoppingCartIcon />
                      </h2>
                    </>
                  )}
                </div>
              </div>
              <div className="col-10 offset-1">
                <p>{text}</p>
              </div>
              <div className="row mt-4">
                <div className="col-10 offset-1">
                  <ul className="list-group-flush">
                    {description &&
                      description.map((el, index) => (
                        <li className="list-group-item" key={index}>
                          {el}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display;
