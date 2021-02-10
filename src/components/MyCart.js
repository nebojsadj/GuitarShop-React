import React from "react";
import CartContent from "./CartContent";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function MyCart() {
  const inCart = useSelector((state) => state.guitars.inCart);
  const buy = useSelector((state) => state.guitars.buy);

  return (
    <Container>
      <Row className="holderF">
        <Col md={{ span: 10, offset: 1 }} xs={{ span: 12 }}>
          <h2 className="text-dark text-center mt-4 msg">My shopping cart</h2>
          {inCart.length === 0 ? (
            <h1 className="text-center text-danger msg">Your cart is empty!</h1>
          ) : (
            <Table className="table-responsive mt-4">
              <thead>
                <tr>
                  <th className="mTab">id</th>
                  <th className="mTab">name</th>
                  <th className="mTab">img</th>
                  <th className="mTab">price</th>
                  <th className="mTab">less</th>
                  <th className="mTab">quantity</th>
                  <th className="mTab">more</th>
                  <th className="mTab">total</th>
                  <th className="mTab">remove</th>
                  <th className="mTab">buyItem</th>
                </tr>
              </thead>
              <tbody>
                {inCart.map((guitar, index) => (
                  <CartContent guitar={guitar} key={index} index={index} />
                ))}
              </tbody>
            </Table>
          )}
          <Row className="mt-5">
            {inCart.length > 0 && (
              <Col
                md={{ span: 4, offset: 4 }}
                xs={{ span: 8, offset: 2 }}
                className="mb-4"
              >
                <Link to="/" className="btn btn-primary form-control">
                  Continue shopping
                </Link>
              </Col>
            )}
            {buy.length > 0 && (
              <Col
                md={{ span: 4, offset: 4 }}
                xs={{ span: 8, offset: 2 }}
                className="mb-4"
              >
                <Link to="/info" className="btn btn-success form-control">
                  Confirm Buy
                </Link>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default MyCart;
