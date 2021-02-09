import React from "react";
import acoustic from "../../bg/acousticg.jpg";
import electric from "../../bg/electricg.jpg";
import { Link } from "react-router-dom";
import { Col, Row, Container, Card, Image } from "react-bootstrap";
import img from "../../bg/aa1.jpg";

function Guitars() {
  return (
    <Container>
      <Row>
        <Col>
          <h3 className="mt-4 mb-4 text-center">Find Your Next Guitar</h3>
          <Image className="d-block w-100 imgSl" src={img} alt={img} />
          <Row className="mt-3 mb-5">
            <Col className="mt-3 mb-4 d-flex justify-content-around">
              <Link to="/acoustic" style={{ textDecoration: "none" }}>
                <Card
                  style={{ width: "19rem", boxShadow: "0 0 8px black" }}
                  className="cardCat"
                >
                  <Card.Header className="text-center text-light bg-dark">
                    Acoustic
                  </Card.Header>
                  <Card.Img variant="top" src={acoustic} className="catImg" />
                </Card>
              </Link>
            </Col>
            <Col className="mt-3 mb-4 d-flex justify-content-around">
              <Link to="/electric" style={{ textDecoration: "none" }}>
                <Card
                  style={{ width: "19rem", boxShadow: "0 0 8px black" }}
                  className="cardCat"
                >
                  <Card.Header className="text-center text-light bg-dark">
                    Electric
                  </Card.Header>
                  <Card.Img variant="top" src={electric} className="catImg" />
                </Card>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Guitars;
