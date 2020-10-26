import React from "react";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import Guitars from "./components/Guitars";
import ElectricGuitars from "./components/Electric/ElectricGuitars";
import AcousticGuitars from "./components/Acoustic/AcousticGuitars";
import Display from "./components/Display";
import MyCart from "./components/MyCart";
import Modal from "./components/Modal";
import CustomersInfo from "./components/CustomersInfo";
import Buy from "./components/Buy";
import SuccessfulOrder from "./components/SuccessfulOrder";

function App() {
  return (
    <>
      <Navbar />
      <Modal />
      <Route path="/" exact>
        <Guitars />
      </Route>
      <Route path="/acoustic">
        <AcousticGuitars />
      </Route>
      <Route path="/electric">
        <ElectricGuitars />
      </Route>
      <Route path="/display">
        <Display />
      </Route>
      <Route path="/cart">
        <MyCart />
      </Route>
      <Route path="/info">
        <CustomersInfo />
      </Route>
      <Route path="/buy">
        <Buy />
      </Route>
      <Route path="/successfulOrder">
        <SuccessfulOrder />
      </Route>
    </>
  );
}

export default App;
