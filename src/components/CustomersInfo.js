import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { personal_info_action } from "../redux/actions";
import { FaCartArrowDown } from "react-icons/fa";
import { Col, Container, Row, FormControl, Button } from "react-bootstrap";

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
  };

  return (
    <Container>
      <h2 className="mt-5 info">Your personal information</h2>
      <Row className="mt-5">
        <Col md={{ span: 8, offset: 2 }} xs={{ span: 10, offset: 1 }}>
          <FormControl
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
            placeholder="Name"
            className="form-control"
          />
          {(name === check && (
            <p className="text-danger">* please fill in the field</p>
          )) || <br />}
          <FormControl
            onChange={(e) => setInfo({ ...info, lastName: e.target.value })}
            placeholder="LastName"
            className="form-control"
          />
          {(lastName === check && (
            <p className="text-danger">* please fill in the field</p>
          )) || <br />}
          <FormControl
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
            placeholder="Email"
            className="form-control"
          />
          {(email === check && (
            <p className="text-danger">* please fill in the field</p>
          )) || <br />}
          <FormControl
            onChange={(e) => setInfo({ ...info, phone: e.target.value })}
            placeholder="Phone"
            className="form-control"
          />
          {(phone === check && (
            <p className="text-danger">* please fill in the field</p>
          )) || <br />}
          <FormControl
            onChange={(e) => setInfo({ ...info, streetNumber: e.target.value })}
            placeholder="Street/Number"
            className="form-control"
          />
          {(streetNumber === check && (
            <p className="text-danger">* please fill in the field</p>
          )) || <br />}
          <FormControl
            onChange={(e) =>
              setInfo({ ...info, cityPostNumber: e.target.value })
            }
            placeholder="City-Post/Number"
            className="form-control"
          />
          {(cityPostNumber === check && (
            <p className="text-danger">* please fill in the field</p>
          )) || <br />}

          {success.length !== 0 ? (
            <Button
              onClick={showInfo}
              className="btn btn-info form-control mb-5"
            >
              Continue
            </Button>
          ) : (
            <Link
              to="/buy"
              onClick={() => dispatch(personal_info_action(info))}
              className="btn btn-success form-control mb-5"
            >
              <FaCartArrowDown size="1.4em" /> Buy $
            </Link>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default CustomersInfo;
