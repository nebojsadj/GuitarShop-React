import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function SuccessfulOrder() {
  return (
    <Container>
      <Row className="holderF">
        <Col md={{ span: 10, offset: 1 }}>
          <h2 className="text-success text-center mt-5">
            You have successfully executed your order!
          </h2>
          <h2 className="text-success text-center">
            Thank you for your trust!
          </h2>
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <Link to="/" className="btn btn-primary form-control mt-5 mb-5">
                Continue shopping
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default SuccessfulOrder;
