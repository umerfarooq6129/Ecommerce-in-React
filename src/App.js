import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import About from "./component/About"
import Products from "./component/Products";
import Contact from "./component/Contact";
import SingleProduct from "./component/SingleProduct";
import Cart from './component/Cart'
import Error from './component/Error'
import { GlobalStyle } from "./component/GlobalStyle";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Router>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )

};

export default App;
