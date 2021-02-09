import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Item from "./Item";
import { Link } from "react-router-dom";
import { remove_all_from_cart_action } from "../redux/actions";
import PersonalInfo from "./PersonalInfo";
import { Col, Container, Row, Table } from "react-bootstrap";

function Buy() {
  const buy = useSelector((state) => state.guitars.buy);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h5 className="mt-4 mx-auto text-primary info">
            Your personal information
          </h5>
          <PersonalInfo />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h5 className=" mt-4 text-primary info">Your order</h5>
          <Table className="table mt-4">
            <thead>
              <tr>
                <th className="mTab">name</th>
                <th className="mTab">price</th>
                <th className="mTab">quantity</th>
                <th className="mTab">totalPrice</th>
              </tr>
            </thead>
            <tbody>
              {buy.map((item, index) => (
                <Item item={item} key={index} />
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <h5 className="text-danger info">
            {buy.length > 0 &&
              `Total for payment:
                ${buy.map((el) => el.total).reduce((a, b) => a + b)} $`}
          </h5>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Link
            to="/successfulOrder"
            onClick={() => dispatch(remove_all_from_cart_action())}
            className="btn btn-success float-right"
          >
            Confirm order
          </Link>
          <Link
            to="/"
            onClick={() => dispatch(remove_all_from_cart_action())}
            className="btn btn-warning float-left mb-4"
          >
            Cancel order
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Buy;
