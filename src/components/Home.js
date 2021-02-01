import React from "react";
import img1 from "../bg/martin.jpg";
import img2 from "../bg/img5.jpg";
import img3 from "../bg/img6.jpg";
import img4 from "../bg/taylor.jpg";
import img5 from "../bg/img8.jpg";
import {
  Container,
  Row,
  Col,
  Carousel,
  Image,
  Card,
  Button,
} from "react-bootstrap";
import guitars from "../bg/guitars.jpg";
import bass from "../bg/bass.jpg";
import strings from "../bg/strings.jpg";
import electric from "../bg/ibanez.jpg";
import { Link } from "react-router-dom";

function Home() {
  const bg = [img1, img2, img3, img4, img5];
  const category = [
    {
      type: "Guitars",
      img: guitars,
      link: "/guitars",
    },
    {
      type: "Bass",
      img: bass,
      link: "/bass",
    },
    {
      type: "Strings",
      img: strings,
      link: "/strings",
    },
  ];

  return (
    <Container>
      <Row>
        <Col>
          <h3 className="mt-3 text-center">Welcome to the Guitar shop</h3>
          <Carousel>
            {bg.map((item) => (
              <Carousel.Item interval={1000} key={item}>
                <Image className="d-block w-100" src={item} alt={item} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Row>
        <h4 className="mt-4 mx-auto">Categories of our guitars</h4>
      </Row>
      <Row>
        {category.map((el) => (
          <Col key={el.type}>
            <Card
              style={{ width: "18rem" }}
              className="d-flex justify-content-around"
            >
              <Card.Header className="text-center bg-warning">
                {el.type}
              </Card.Header>
              <Card.Img variant="top" src={el.img} className="catImg" />
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <h4 className="mt-4 mx-auto">About us</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
          sapiente. Accusantium eaque, voluptates, ex sapiente quibusdam omnis
          illo dolorem fugiat aliquid facilis ducimus nisi temporibus earum, sit
          delectus impedit molestiae. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vel sapiente officiis culpa dignissimos, veritatis
          eaque placeat minima non. Dolore fugiat deserunt ipsa rerum illum
          porro facilis alias dolorum saepe! Quaerat. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Odit, blanditiis sunt. Dolorum, itaque
          quae sit consequuntur dicta eaque pariatur numquam eveniet, ipsa
          deleniti commodi facilis voluptas laboriosam dolorem? Rem, delectus.
        </p>
      </Row>
    </Container>
  );
}

export default Home;
