import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import Acoustic from "./Acoustic";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

function AcousticGuitars() {
  const guitars = useSelector((state) => state.guitars.guitars);
  const acousticGuitars = guitars.filter((el) => el.type === "acoustic");
  const history = useHistory();

  return (
    <Container>
      <Row>
        <Col md={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
          <h3 className="mt-4 mb-4 text-center">Acoustic Guitars</h3>
          <Row>
            {acousticGuitars.map((acoustic, index) => (
              <Col className="d-flex justify-content-around" key={index}>
                <Acoustic acoustic={acoustic} />
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

export default AcousticGuitars;
