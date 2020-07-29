import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Menu";
import HomeView from "./components/HomeView";
import SignUp from "./components/registration/SignUp";
import SignIn from "./components/registration/SignIn";
import About from "./components/About";
import Contact from "./components/Contact";
import SendQuote from "./components/quotes/sendQuote";
import ReceiveQuote from "./components/quotes/receiveQuote";
import yourQuotes from "./components/quotes/yourQuotes";
import NewProduct from "./components/products/newProduct";
import MyProducts from "./components/products/myProducts";
import Dashboard from "./components/dashboard/index";
import Products from "./components/products";


import axios from "axios";
const App = () => {
  // State for setting user
  const [user, setUser] = useState(false);

  // State for receiving quote
  const [productReq, setProductReq] = useState("");
  const [length, setLength] = useState("");
  const [location, setLocation] = useState("");

  // Setting State For New Products
  const [newProductName, setNewProductName] = useState("");
  const [productImg, setProductImg] = useState("");

  // Checking if user logged in
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users/me", { withCredentials: true })
      .then((response) => setUser(response.data));
  }, []);

  // State for MY Products
  const [myProducts, setMyProducts] = useState([]);

  // State For Products page
  const [product, setProduct] = useState([]);

  // State for quotes
  const [quotes, setQuotes ] = useState([])

  return (
    <div>
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} />
        <Route exact path="/" component={HomeView} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signup" component={SignUp} />

        <Route
          exact
          path="/signin"
          render={(props) => <SignIn setUser={setUser} {...props} />}
        />

        <Route exact path="/sendquote" component={SendQuote} />

        <Route
          exact
          path="/receivequote"
          render={(props) => (
            <ReceiveQuote
              {...props}
              productReq={productReq}
              setProductReq={setProductReq}
              length={length}
              setLength={setLength}
              location={location}
              setLocation={setLocation}
              user={user}
            />
          )}
        />

        <Route exact path="/yourquotes" component={yourQuotes} />

        <Route
          exact
          path="/products/new"
          render={(props) => (
            <NewProduct
              {...props}
              newProductName={newProductName}
              setNewProductName={setNewProductName}
              productImg={productImg}
              setProductImg={setProductImg}
              user={user}
            />
          )}
        />

        <Route
          exact
          path="/products/myproducts"
          render={(props) => (
            <MyProducts
              {...props}
              myProducts={myProducts}
              setMyProducts={setMyProducts}
            />
          )}
        />
        <Route
          exact
          path="/dashboard"
          render={(props) => (
            <Dashboard {...props} myProducts={myProducts} user={user} quotes={quotes} setQuotes={setQuotes} />
          )}
        />
        <Route
          exact
          path="/products"
          render={(props) => (
            <Products
              {...props}
              product={product}
              setProduct={setProduct}
            />
          )}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
