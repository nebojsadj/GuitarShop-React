import React from "react";
import { electricData } from "../Data";
import Electric from "./Electric";

function ElectricGuitars({ displayMore, addToCart, inCart }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <div className="row">
            {electricData.map((electric, index) => (
              <div className="col-12" key={index}>
                <Electric
                  electric={electric}
                  displayMore={displayMore}
                  addToCart={addToCart}
                  inCart={inCart}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElectricGuitars;
