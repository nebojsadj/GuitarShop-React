import React from "react";
import CartContent from "./CartContent";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function MyCart() {
  const inCart = useSelector((state) => state.guitars.inCart);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="text-dark text-center mt-4">My shopping cart</h2>
          {inCart.length === 0 ? (
            <h1 className="text-center text-danger">Your cart is empty!</h1>
          ) : (
            <div className="col-12 mt-4">
              <table className="table mt-4">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>img</th>
                    <th>price</th>
                    <th>less</th>
                    <th>quantity</th>
                    <th>more</th>
                    <th>total</th>
                    <th>remove</th>
                    <th>buyItem</th>
                  </tr>
                </thead>
                <tbody>
                  {inCart.map((guitar, index) => (
                    <CartContent guitar={guitar} key={index} index={index} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="row mt-5">
            {inCart.length > 0 && (
              <div className="col-4 offset-4">
                <Link to="/" className="btn btn-primary form-control">
                  Continue shopping
                </Link>
                <Link to="/order" className="btn btn-success form-control mt-4">
                  Confirm Buy
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCart;
