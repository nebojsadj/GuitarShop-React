import React from "react";
import { useSelector } from "react-redux";

function PersonalInfo() {
  const info = useSelector((state) => state.guitars.personalInfo);
  const { name, lastName, email, phone, streetNumber, cityPostNumber } = info;
  return (
    <ul className="list-group-flush mt-4">
      <li className="list-group-item info">{`Name : ${name}`}</li>
      <li className="list-group-item info">{`LastName : ${lastName}`}</li>
      <li className="list-group-item info">{`Email : ${email}`}</li>
      <li className="list-group-item info">{`Phone : ${phone}`}</li>
      <li className="list-group-item info">{`StreetNumber : ${streetNumber}`}</li>
      <li className="list-group-item info">{`CityPostNumber : ${cityPostNumber}`}</li>
    </ul>
  );
}

export default PersonalInfo;
