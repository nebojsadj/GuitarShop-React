import React from "react";
import { Link } from "react-router-dom";

function Electric({ electric, displayMore, addToCart, inCart }) {
  const { id, name, img, text, price } = electric;
  return (
    <div className="card mt-4">
      <div className="card-header bg-secondary text-white">{name}</div>
      <div className="card-body">
        <div className="row">
          <div className="col-4">
            <img
              src={`imgs/${img}.jpg`}
              alt="img"
              width="160"
              className="img"
            />
          </div>
          <div className="col-8 font-italic">
            <p>{`${text.substring(0, 220)}...`}</p>
            <div className="col-10">
              <h3 className="float-right price">{`${price} $`}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <Link
          to={"/display/" + id}
          onClick={() => displayMore(id)}
          className="btn btn-info btn-sm float-left"
        >
          Show more
        </Link>
        {inCart.indexOf(id) === -1 ? (
          <button
            onClick={() => addToCart(electric)}
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

export default Electric;
