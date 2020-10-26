import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

function Buy() {
  const info = useSelector((state) => state.guitars.personalInfo);
  const buy = useSelector((state) => state.guitars.buy);
  const { name, lastName, email, phone, streetNumber, cityPostNumber } = info;

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <div className="row">
            <div className="col-8 offset-2">
              <h3 className=" mt-4 text-primary info">
                Your personal information
              </h3>
              <ul className="list-group-flush mt-4">
                <li className="list-group-item info">{`Name : ${name}`}</li>
                <li className="list-group-item info">{`LastName : ${lastName}`}</li>
                <li className="list-group-item info">{`Email : ${email}`}</li>
                <li className="list-group-item info">{`Phone : ${phone}`}</li>
                <li className="list-group-item info">{`StreetNumber : ${streetNumber}`}</li>
                <li className="list-group-item info">{`CityPostNumber : ${cityPostNumber}`}</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-10 offset-1">
              <h3 className=" mt-4 text-primary info">Your order</h3>
              <table className="table mt-4">
                <thead>
                  <tr>
                    <th>name</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>totalPrice</th>
                  </tr>
                </thead>
                <tbody>
                  {buy.map((item, index) => (
                    <Item item={item} key={index} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-6 offset-3 ">
              <h3 className="text-danger info">
                {buy.length > 0 &&
                  `Total for payment:
                ${buy.map((el) => el.total).reduce((a, b) => a + b)} $`}
              </h3>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-8 offset-2">
              <button className="btn btn-success float-right">
                Confirm order
              </button>
              <button className="btn btn-warning float-left">
                Cancel order
              </button>
            </div>
          </div>
          {/* <div className="row mt-3">
            <div className="col-4 offset-4 ">
              <h2 className="text-success info">Thank you for your trust!</h2>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Buy;
