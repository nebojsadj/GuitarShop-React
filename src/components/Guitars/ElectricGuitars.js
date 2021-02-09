import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Electric from "./Electric";
import { useSelector } from "react-redux";

function ElectricGuitars() {
  const guitars = useSelector((state) => state.guitars.guitars);
  const electricGuitars = guitars.filter((el) => el.type === "electric");

  return (
    <Container>
      <Row>
        <Col md={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
          <h3 className="mt-4 mb-4 text-center">Electric Guitars</h3>
          <Row>
            {electricGuitars.map((electric, index) => (
              <Col className="d-flex justify-content-around" key={index}>
                <Electric electric={electric} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ElectricGuitars;
