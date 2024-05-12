import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";
import Header from "./Components/Headers/header";
import Footer from "./Components/Headers/Footer";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Wishlist from "./Components/Pages/Wishlist";
import Product from "./Components/products/Product";
import Cart from "./Components/products/Cart";
import Productdetails from "./Components/products/Productdetails";
import Payment from "./Components/Payment/payment";

const App = () => {
  const [cart, setCart] = useState([]);
  const [details, setDetails] = useState([]);
  // console.log(details)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" el ement={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route
            path="/Shop"
            element={<Product cart={cart} setCart={setCart} />}
          ></Route>
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                setCart={setCart}
                details={details}
                setDetails={setDetails}
              />
            }
          ></Route>
          <Route
            path="/shop/productdetails/:id"
            element={
              <Productdetails details={details} setDetails={setDetails} />
            }
          ></Route>
          <Route path="/cart/payment" element={<Payment />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
