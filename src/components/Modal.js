import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Modal() {
  const history = useHistory();
  const itemAddedToCart = useSelector((state) => state.guitars.itemAddedToCart);

  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header bg-success">
            <h2 className="modal-title modalH2" id="exampleModalLongTitle">
              Item added to cart
            </h2>
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="row">
                <h4 className="text-center">
                  {itemAddedToCart !== "" && itemAddedToCart.name}
                </h4>
              </div>
              <div className="row mt-3">
                <div className="col-8 offset-3">
                  {itemAddedToCart !== "" && (
                    <img
                      src={`/imgs/${itemAddedToCart.img}.jpg`}
                      alt="img"
                      width="200"
                    />
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-4 offset-4">
                  <h5 className="text-center mt-3 price">
                    {itemAddedToCart !== "" && `${itemAddedToCart.price} $`}
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="col-10 offset-1">
              <div className="row">
                <div className="col-8 offset-2">
                  <button className="btn btn-warning mr-4" data-dismiss="modal">
                    Continue shopping
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-6 offset-3">
                  <button
                    onClick={() => history.push("/cart")}
                    className="btn btn-primary mt-2 "
                    data-dismiss="modal"
                  >
                    Go to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
