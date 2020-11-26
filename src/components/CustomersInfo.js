import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { personal_info_action } from "./redux/actions";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function CustomersInfo() {
  const [info, setInfo] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    streetNumber: "",
    cityPostNumber: "",
  });

  const [check, setCheck] = useState("check");
  const success = Object.values(info).filter((el) => el === "");
  const { name, lastName, email, phone, streetNumber, cityPostNumber } = info;
  const dispatch = useDispatch();

  const showInfo = () => {
    setCheck("");
    alert("if the data is correct press 'Bye', if not please fix it.");
  };

  return (
    <div className="container">
      <h2 className="text-center mt-5">Your personal information</h2>
      <div className="row mt-5">
        <div className="col-4 offset-4">
          <input
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
            type="text"
            placeholder="Name"
            className="form-control"
          />
          {(name === check && (
            <p className="text-danger">* please fill in the field</p>
          )) || <br />}
          <input
            onChange={(e) => setInfo({ ...info, lastName: e.target.value })}
            type="text"
            placeholder="LastName"
            className="form-control"
          />
          {(lastName === check && (
            <p className="text-danger">* please fill in the field</p>
          )) || <br />}
          <input
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
            type="text"
            placeholder="Email"
            className="form-control"
          />
          {(email === check && (
            <p className="text-danger">* please fill in the field</p>
          )) || <br />}
          <input
            onChange={(e) => setInfo({ ...info, phone: e.target.value })}
            type="text"
            placeholder="Phone"
            className="form-control"
          />
          {(phone === check && (
            <p className="text-danger">* please fill in the field</p>
          )) || <br />}
          <input
            onChange={(e) => setInfo({ ...info, streetNumber: e.target.value })}
            type="text"
            placeholder="Street/Number"
            className="form-control"
          />
          {(streetNumber === check && (
            <p className="text-danger">* please fill in the field</p>
          )) || <br />}
          <input
            onChange={(e) =>
              setInfo({ ...info, cityPostNumber: e.target.value })
            }
            type="text"
            placeholder="City-Post/Number"
            className="form-control"
          />
          {(cityPostNumber === check && (
            <p className="text-danger">* please fill in the field</p>
          )) || <br />}
          <button onClick={showInfo} className="btn btn-info form-control">
            Continue
          </button>
          {success.length === 0 && (
            <Link
              to="/buy"
              onClick={() => dispatch(personal_info_action(info))}
              className="btn btn-success form-control mt-3"
            >
              <ShoppingCartIcon /> Buy $
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomersInfo;
