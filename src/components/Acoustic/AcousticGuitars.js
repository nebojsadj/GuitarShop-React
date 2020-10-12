import React from "react";
import { acousticData } from "../Data";
import Acoustic from "./Acoustic";

function AcousticGuitars({ displayMore, addToCart, inCart }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <div className="row">
            {acousticData.map((acoustic, index) => (
              <div className="col-12" key={index}>
                <Acoustic
                  acoustic={acoustic}
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

export default AcousticGuitars;
