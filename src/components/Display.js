import React, { useState } from "react";
import { Container, Col, Row, Image, Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  add_to_cart_action,
  item_added_to_cart_action,
} from "../redux/actions";
import { useHistory } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { RiArrowGoBackFill } from "react-icons/ri";

function Display() {
  const display = useSelector((state) => state.guitars.displayInstrument);
  const inCart = useSelector((state) => state.guitars.inCart);
  const itemAddedToCart = useSelector((state) => state.guitars.itemAddedToCart);
  const idInCart = inCart.map((el) => el.id);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id, name, img, text, price, description } = display;

  const [show, setShow] = useState(false);

  return (
    <>
      <Container>
        <Row
          style={{
            border: "1px solid gray",
            boxShadow: "0 0 6px",
            marginTop: "5%",
          }}
        >
          <Col md={{ span: 6 }}>
            <Image
              src={`/imgs/${img}.jpg`}
              alt="img"
              width="100%"
              className="mt-2 mb-2"
            />
          </Col>
          <Col md={{ span: 6 }}>
            <h3 className="text-center mt-5">{name || history.push("/")}</h3>
            <div className="bg-warning price mt-4">{`Our price: ${price} $`}</div>
            {idInCart.indexOf(id) === -1 ? (
              <Button
                onClick={() => {
                  dispatch(add_to_cart_action(display));
                  dispatch(item_added_to_cart_action());
                  setShow(true);
                }}
                className="btn btn-danger form-control mt-3"
              >
                Add to Cart <FaCartArrowDown size="1.4em" />
              </Button>
            ) : (
              <p className="bg-warning text-center mt-3 add">
                In Cart <FaCartArrowDown size="1.4em" />
              </p>
            )}
            <Button
              variant="secondary"
              onClick={() => history.goBack()}
              className="mt-3 form-control"
            >
              <RiArrowGoBackFill />
              Go back
            </Button>
            <p className="text-center text-success mt-3">In stock</p>
            <h5 className="mt-3 text-center">Product description</h5>
            <p>{text}</p>
          </Col>
          <Row>
            <Col md={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
              <h5 className="mt-3 text-center">Technical specification</h5>
              <p>{description}</p>
            </Col>
          </Row>
        </Row>
      </Container>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="bg-warning">
          <Modal.Title id="contained-modal-title-vcenter" className="mx-auto">
            Item added to cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="text-center">{itemAddedToCart.name}</h4>
          <Image
            src={`/imgs/${itemAddedToCart.img}.jpg`}
            alt="img"
            width="200"
            className="d-block mx-auto mt-3"
          />
          <h5 className="text-center mt-3">{`${itemAddedToCart.price} $`}</h5>
        </Modal.Body>
        <Modal.Footer className="mx-auto">
          <Button onClick={() => setShow(false)} variant="warning">
            Continue shopping
          </Button>
          <Button onClick={() => history.push("/cart")}>
            Go to cart <FaCartArrowDown size="1.4em" />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Display;
