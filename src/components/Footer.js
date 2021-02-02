import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <Container fluid className="bg-dark">
      <Row className="dflex justify-content-around">
        <Col className="d-flex justify-content-around">
          <ul className="list-unstyled text-light mt-3">
            <li>Home</li>
            <li>Guitars</li>
            <li>Bass</li>
            <li>Strings</li>
          </ul>
        </Col>
        <Col className="d-flex justify-content-around">
          <ul className="list-unstyled text-light mt-3">
            <li>Phone: +381 11555333</li>
            <li>Phone: +381 11555334</li>
            <li>Mob: +381 645553333</li>
            <li>Email: guitarsshop@gmail.com</li>
          </ul>
        </Col>
        <Col className="d-flex justify-content-around">
          <ul className="list-unstyled text-light mt-3">
            <li>Open from 10 a.m. to 10 p.m.</li>
            <li>on Sundays from 10 a.m. to 4 p.m.</li>
          </ul>
        </Col>
      </Row>
      <hr className="bg-light mx-auto" width="90%" />
      <Row>
        <Col className="text-light d-flex justify-content-center">
          <FaFacebookF size="1.7em" className="ml-2" />
          <FaTwitter size="2em" className="ml-2" />
          <FaYoutube size="2em" className="ml-2" />
          <FaPinterestP size="1.7em" className="ml-2" />
          <AiFillInstagram size="2em" className="ml-2" />
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-center text-light">
            &copy;{new Date().getFullYear()} Guitars shop
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
