import React from "react";
import Acoustic from "./Acoustic";
import { useSelector } from "react-redux";

function AcousticGuitars() {
  const guitars = useSelector((state) => state.guitars.guitars);
  const acousticGuitars = guitars.filter((el) => el.type === "acoustic");

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <div className="row">
            {acousticGuitars.map((acoustic, index) => (
              <div className="col-12" key={index}>
                <Acoustic acoustic={acoustic} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcousticGuitars;
