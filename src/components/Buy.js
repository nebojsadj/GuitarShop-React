import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

function Buy() {
  const info = useSelector((state) => state.guitars.personalInfo);
  const buy = useSelector((state) => state.guitars.buy);
  console.log(info);

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <h1 className="text-center text-success mt-4">
            You have successfully placed your order!
          </h1>
          <div className="row">
            <div className="col-8 offset-2">
              <h3 className=" mt-4 text-primary info">
                Your personal information
              </h3>
              <ul className="list-group-flush mt-4">
                <li className="list-group-item info">{`Name : ${info.name}`}</li>
                <li className="list-group-item info">{`LastName : ${info.lastName}`}</li>
                <li className="list-group-item info">{`Email : ${info.email}`}</li>
                <li className="list-group-item info">{`Phone : ${info.phone}`}</li>
                <li className="list-group-item info">{`StreetNumber : ${info.streetNumber}`}</li>
                <li className="list-group-item info">{`CityPostNumber : ${info.cityPostNumber}`}</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-10 offset-1">
              <h3 className=" mt-4 text-primary info">Your order</h3>
              <table className="table mt-4">
                <thead>
                  <tr>
                    <th>index</th>
                    <th>name</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>totalPrice</th>
                  </tr>
                </thead>
                <tbody>
                  {buy.map((item) => (
                    <Item item={item} key={item.index} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-4 offset-4 ">
              <h2 className="text-success info">Thank you for your trust!</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
