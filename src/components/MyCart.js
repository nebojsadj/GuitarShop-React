import React from "react";
import CartContent from "./CartContent";

function MyCart({ guitars, removeFromCart }) {
  let content = guitars.map((guitar, index) => (
    <CartContent
      guitar={guitar}
      key={index}
      index={index}
      removeFromCart={removeFromCart}
    />
  ));

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="text-dark text-center mt-4">My shopping cart</h2>
          {guitars.length === 0 ? (
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
                    <th>quantity</th>
                    <th>total</th>
                    <th>removeCart</th>
                  </tr>
                </thead>
                <tbody>{content}</tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyCart;
