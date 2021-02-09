import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

function PersonalInfo() {
  const info = useSelector((state) => state.guitars.personalInfo);
  const { name, lastName, email, phone, streetNumber, cityPostNumber } = info;
  return (
    <ListGroup variant="flush" className="mt-4">
      <ListGroup.Item className="info">{`Name : ${name}`}</ListGroup.Item>
      <ListGroup.Item className="info">{`LastName : ${lastName}`}</ListGroup.Item>
      <ListGroup.Item className="info">{`Email : ${email}`}</ListGroup.Item>
      <ListGroup.Item className="info">{`Phone : ${phone}`}</ListGroup.Item>
      <ListGroup.Item className="info">{`StreetNumber : ${streetNumber}`}</ListGroup.Item>
      <ListGroup.Item className="info">{`CityPostNumber : ${cityPostNumber}`}</ListGroup.Item>
    </ListGroup>
  );
}

export default PersonalInfo;
