import React from "react";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import Guitars from "./components/Guitars";
import ElectricGuitars from "./components/Electric/ElectricGuitars";
import AcousticGuitars from "./components/Acoustic/AcousticGuitars";
import Display from "./components/Display";
import MyCart from "./components/MyCart";
import Modal from "./components/Modal";

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
      <Route path="/display/:id">
        <Display />
      </Route>
      <Route path="/cart">
        <MyCart />
      </Route>
    </>
  );
}

export default App;
