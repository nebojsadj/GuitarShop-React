import React from "react";
import img1 from "../bg/ac3.jpg";
import img2 from "../bg/aa3.jpg";
import img3 from "../bg/ac2.jpg";
import img4 from "../bg/ad.jpg";
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
import { useHistory } from "react-router-dom";

function Home() {
  const bg = [img1, img2, img3, img4];
  const history = useHistory();
  const category = [
    {
      type: "Guitars",
      img: guitars,
    },

    {
      type: "Strings",
      img: strings,
    },
  ];

  return (
    <Container>
      <Row>
        <Col>
          <h3 className="mt-3 mb-3 text-center">Welcome to the Guitar shop</h3>
          <Carousel fade>
            {bg.map((item) => (
              <Carousel.Item interval={2000} key={item}>
                <Image className="d-block w-100 imgSl" src={item} alt={item} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Row>
        <h4 className="mt-4 mb-4 mx-auto">Categories of our guitars</h4>
      </Row>
      <hr style={{ border: "1px solid black" }} />
      <Row>
        {category.map((el) => (
          <Col key={el.type} className="d-flex justify-content-around">
            <Card
              onClick={() => history.push(`/${el.type.toLowerCase()}`)}
              style={{ width: "20rem", boxShadow: "0 0 8px black" }}
              className="cardCat mt-3 mb-3"
            >
              <Card.Header className="text-center text-light bg-dark">
                {el.type}
              </Card.Header>
              <Card.Img variant="top" src={el.img} className="catImg" />
            </Card>
          </Col>
        ))}
      </Row>
      <hr style={{ border: "1px solid black" }} />
      <Row>
        <Col md={{ span: 12, offset: 0 }} xs={{ span: 10, offset: 1 }}>
          <h4 className="mt-4 text-center">About us</h4>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            sapiente. Accusantium eaque, voluptates, ex sapiente quibusdam omnis
            illo dolorem fugiat aliquid facilis ducimus nisi temporibus earum,
            sit delectus impedit molestiae. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Vel sapiente officiis culpa
            dignissimos, veritatis eaque placeat minima non. Dolore fugiat
            deserunt ipsa rerum illum porro facilis alias dolorum saepe!
            Quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odit, blanditiis sunt. Dolorum, itaque quae sit consequuntur dicta
            eaque pariatur numquam eveniet, ipsa deleniti commodi facilis
            voluptas laboriosam dolorem? Rem, delectus.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
