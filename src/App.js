import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Guitars from "./components/Guitars";
import ElectricGuitars from "./components/Electric/ElectricGuitars";
import AcousticGuitars from "./components/Acoustic/AcousticGuitars";
import Display from "./components/Display";
import MyCart from "./components/MyCart";
import { electricData, acousticData } from "./components/Data";
import Modal from "./components/Modal";

function App() {
  const [guitar, setGuitar] = useState("");
  const [guitarToCart, setGuitarToCart] = useState([]);

  const inCart = guitarToCart.map((el) => el.id);

  const displayMore = (id) => {
    const filterEl = electricData.filter((el) => el.id === id)[0];
    const filterAk = acousticData.filter((el) => el.id === id)[0];

    if (filterEl) {
      setGuitar(filterEl);
    }
    if (filterAk) {
      setGuitar(filterAk);
    }
  };

  const addToCart = (guitar) => {
    setGuitarToCart([...guitarToCart, guitar]);
  };

  const removeFromCart = (id) => {
    let filtered = guitarToCart.filter((guitar) => guitar.id !== id);
    setGuitarToCart(filtered);
    console.log(id);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Modal guitarToCart={guitarToCart} />
        <Route path="/" exact>
          <Guitars />
        </Route>
        <Route path="/electric">
          <ElectricGuitars
            displayMore={displayMore}
            addToCart={addToCart}
            inCart={inCart}
          />
        </Route>
        <Route path="/acoustic">
          <AcousticGuitars
            displayMore={displayMore}
            addToCart={addToCart}
            inCart={inCart}
          />
        </Route>
        <Route path="/display/:id">
          <Display guitar={guitar} addToCart={addToCart} inCart={inCart} />
        </Route>
        <Route path="/cart">
          <MyCart guitars={guitarToCart} removeFromCart={removeFromCart} />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
