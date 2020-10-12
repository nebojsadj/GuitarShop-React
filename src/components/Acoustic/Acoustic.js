import React from "react";
import { Link } from "react-router-dom";

function Acoustic({ acoustic, displayMore, addToCart, inCart }) {
  return (
    <div className="card mt-4">
      <div className="card-header bg-secondary text-white">{acoustic.name}</div>
      <div className="card-body">
        <div className="row">
          <div className="col-4">
            <img
              src={`imgs/${acoustic.img}.jpg`}
              alt="img"
              width="160"
              className="img"
            />
          </div>
          <div className="col-8 font-italic">
            <p>{`${acoustic.text.substring(0, 220)}...`}</p>
            <div className="col-10">
              <h3 className="float-right price">{`${acoustic.price} $`}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <Link
          to={"/display/" + acoustic.id}
          onClick={() => displayMore(acoustic.id)}
          className="btn btn-info btn-sm float-left"
        >
          Show more
        </Link>
        {inCart.indexOf(acoustic.id) === -1 ? (
          <button
            onClick={() => addToCart(acoustic)}
            className="btn btn-danger btn-sm float-right"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            Add to Cart
          </button>
        ) : (
          <button className="btn btn-warning btn-sm float-right">
            In Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Acoustic;
