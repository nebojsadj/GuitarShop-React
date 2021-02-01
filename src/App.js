import React from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Guitars from "./components/Guitars";
import ElectricGuitars from "./components/Electric/ElectricGuitars";
import AcousticGuitars from "./components/Acoustic/AcousticGuitars";
import Display from "./components/Display";
import MyCart from "./components/MyCart";
import Modal from "./components/Modal";
import CustomersInfo from "./components/CustomersInfo";
import Buy from "./components/Buy";
import SuccessfulOrder from "./components/SuccessfulOrder";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Modal />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/guitars">
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
      </Switch>
    </>
  );
}

export default App;
