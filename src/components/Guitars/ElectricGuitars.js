import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import Electric from "./Electric";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

function ElectricGuitars() {
  const guitars = useSelector((state) => state.guitars.guitars);
  const electricGuitars = guitars.filter((el) => el.type === "electric");
  const history = useHistory();

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
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <Button
                variant="secondary"
                onClick={() => history.goBack()}
                className="mt-4 mb-5 form-control"
              >
                <RiArrowGoBackFill />
                Go back
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ElectricGuitars;
