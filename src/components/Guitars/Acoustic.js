import React from "react";
import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { display_more_action } from "../../redux/actions";

function Acoustic({ acoustic }) {
  const inCart = useSelector((state) => state.guitars.inCart);
  const idInCart = inCart.map((el) => el.id);
  const dispatch = useDispatch();
  const history = useHistory();

  const { id, name, img, price, text } = acoustic;

  return (
    <Card
      onClick={() => {
        dispatch(display_more_action(id));
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
      <Card.Img variant="top" src={`imgs/${img}.jpg`} />
      <Card.Title className="text-center">
        {`${price}$`}
        <br />
        {name}
      </Card.Title>
    </Card>
  );
}

export default Acoustic;
