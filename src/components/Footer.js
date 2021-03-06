import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Container fluid className="bg-dark">
      <Row className="dflex justify-content-around">
        <Col md={{ span: 10, offset: 1 }}>
          <Row className="mt-4">
            <Col md={{ span: 4, offset: 0 }} xs={{ span: 3, offset: 1 }}>
              <h5 className="text-light">Pages</h5>
              <ul className="list-unstyled text-light mt-3">
                <Link to="/" className="footerLinks">
                  <li>Home</li>
                </Link>
                <Link to="/guitars" className="footerLinks">
                  <li>Guitars</li>
                </Link>
                <Link to="/strings" className="footerLinks">
                  <li>Strings</li>
                </Link>
                <Link to="/cart" className="footerLinks">
                  <li>Cart</li>
                </Link>
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
          <a
            href="https://www.facebook.com"
            target="blanc"
            className="footerLinks"
          >
            <FaFacebookF size="1.7em" className="ml-2" />
          </a>
          <a
            href="https://www.twitter.com"
            target="blanc"
            className="footerLinks"
          >
            <FaTwitter size="2em" className="ml-2" />
          </a>
          <a
            href="https://www.youtube.com"
            target="blanc"
            className="footerLinks"
          >
            <FaYoutube size="2em" className="ml-2" />
          </a>
          <a
            href="https://www.pinterest.com"
            target="blanc"
            className="footerLinks"
          >
            <FaPinterestP size="1.7em" className="ml-2" />
          </a>
          <a
            href="https://www.instagram.com"
            target="blanc"
            className="footerLinks"
          >
            <AiFillInstagram size="2em" className="ml-2" />
          </a>
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
