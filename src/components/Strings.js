import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { display_string_action } from "../redux/actions";

function Strings() {
  const strings = useSelector((state) => state.guitars.strings);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Container>
      <Row>
        <Col md={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
          <h3 className="mt-4 mb-4 text-center">Strings</h3>
          <Row>
            {strings.map((string, index) => (
              <Col className="d-flex justify-content-around" key={index}>
                <Card
                  onClick={() => {
                    dispatch(display_string_action(string.id));
                    history.push("/display");
                  }}
                  style={{
                    width: "20rem",
                    boxShadow: "0 0 8px black",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                  className="card"
                >
                  <Card.Img variant="top" src={`imgs/${string.img}.jpg`} />
                  <Card.Title className="text-center">
                    {`${string.price}$`}
                    <br />
                    {string.name}
                  </Card.Title>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Strings;
