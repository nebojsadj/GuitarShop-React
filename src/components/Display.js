import React from "react";

function Display({ guitar, addToCart, inCart }) {
  console.log(guitar);
  console.log(inCart);

  const { id, name, img, text, price } = guitar;

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <div className="card">
            <div className="card-header bg-secondary text-light">
              <h3>{name}</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-10">
                  <img src={`/imgs/${img}.jpg`} alt="img" width="100%" />
                </div>
                <div className="col-2">
                  <div>
                    <div className="price">{`Our price: ${price} $`}</div>
                  </div>
                  {inCart.indexOf(id) === -1 ? (
                    <button
                      onClick={() => addToCart(guitar)}
                      className="btn btn-danger add"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <h2 className="bg-warning text-center add">In Cart</h2>
                  )}
                </div>
              </div>
              <div className="col-10 offset-1">
                <p>{text}</p>
              </div>
              <div className="row mt-4">
                <div className="col-10 offset-1">
                  <ul className="list-group-flush">
                    {guitar
                      ? guitar.description.map((el, index) => (
                          <li className="list-group-item" key={index}>
                            {el}
                          </li>
                        ))
                      : null}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display;
