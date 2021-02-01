import React from "react";
import ibanez from "../bg/ibanez.jpg";
import yamaha from "../bg/yamaha.jpg";
import { Link } from "react-router-dom";

function Guitars() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <div className="row">
            <div className="col-6">
              <div className="card mCard">
                <div className="card-header bg-dark">
                  <h3 className="font-italic text-light">Acoustic guitars</h3>
                </div>
                <Link to="/acoustic" className="card-body">
                  <img src={yamaha} alt="imgYamaha" width="400" height="270" />
                </Link>
              </div>
            </div>
            <div className="col-6">
              <div className="card mCard">
                <div className="card-header bg-dark">
                  <h3 className="font-italic text-light">Electric guitars</h3>
                </div>
                <Link to="/electric" className="card-body">
                  <img src={ibanez} alt="imgIbanez" width="400" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guitars;
