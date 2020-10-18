import React from "react";
import Electric from "./Electric";
import { useSelector } from "react-redux";

function ElectricGuitars() {
  const guitars = useSelector((state) => state.guitars.guitars);
  const electricGuitars = guitars.filter((el) => el.type === "electric");

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <div className="row">
            {electricGuitars.map((electric, index) => (
              <div className="col-12" key={index}>
                <Electric electric={electric} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElectricGuitars;
