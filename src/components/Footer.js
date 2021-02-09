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
        <Col md={{ span: 10, offset: 1 }}>
          <Row className="mt-4">
            <Col md={{ span: 4, offset: 0 }} xs={{ span: 3, offset: 1 }}>
              <h5 className="text-light">Pages</h5>
              <ul className="list-unstyled text-light mt-3">
                <li>Home</li>
                <li>Guitars</li>
                <li>Bass</li>
                <li>Strings</li>
              </ul>
            </Col>
            <Col md={{ span: 4, offset: 0 }} xs={{ span: 8, offset: 0 }}>
              <h5 className="text-light">Contacts</h5>
              <ul className="list-unstyled text-light mt-3">
                <li>Phone: +381 11555333</li>
                <li>Phone: +381 11555334</li>
                <li>Mob: +381 645553333</li>
                <li>Email: guitarsshop@gmail.com</li>
              </ul>
            </Col>
            <Col md={{ span: 4, offset: 0 }} xs={{ span: 8, offset: 2 }}>
              <h5 className="text-light">Openly</h5>
              <ul className="list-unstyled text-light mt-3">
                <li>Open from 10 a.m. to 10 p.m.</li>
                <li>on Sundays from 10 a.m. to 4 p.m.</li>
              </ul>
            </Col>
          </Row>
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
