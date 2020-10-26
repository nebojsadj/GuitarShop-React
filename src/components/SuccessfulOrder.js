import React from "react";

function SuccessfulOrder() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <h1 className="text-success text-center mt-5">
            You have successfully executed your order!
          </h1>
          <h2 className="text-success text-center">
            Thank you for your trust!
          </h2>
          <div className="row">
            <div className="col-4 offset-4">
              <button className="btn btn-primary form-control mt-5">
                Continue shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessfulOrder;
