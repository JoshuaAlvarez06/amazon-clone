import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";
import Payment from "./components/payment/Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/orders/Orders";
import NavMenu from "./components/navMenu/NavMenu";

const { REACT_APP_PUBLISHABLE_KEY } = process.env;

const promise = loadStripe(REACT_APP_PUBLISHABLE_KEY);

function App() {
  const [{ _ }, dispatch] = useStateValue();
  const [navMenuVisible, setNavMenuVisible] = useState(false);

  React.useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route
          path="/orders"
          element={
            <>
              <Header
                setNavMenuVisible={setNavMenuVisible}
                navMenuVisible={navMenuVisible}
              />
              {navMenuVisible && (
                <NavMenu
                  setNavMenuVisible={setNavMenuVisible}
                  navMenuVisible={navMenuVisible}
                />
              )}
              <Orders />
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <>
              <Header
                setNavMenuVisible={setNavMenuVisible}
                navMenuVisible={navMenuVisible}
              />
              {navMenuVisible && (
                <NavMenu
                  setNavMenuVisible={setNavMenuVisible}
                  navMenuVisible={navMenuVisible}
                />
              )}
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header
                setNavMenuVisible={setNavMenuVisible}
                navMenuVisible={navMenuVisible}
              />
              {navMenuVisible && (
                <NavMenu
                  setNavMenuVisible={setNavMenuVisible}
                  navMenuVisible={navMenuVisible}
                />
              )}
              <Checkout />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              <Header
                setNavMenuVisible={setNavMenuVisible}
                navMenuVisible={navMenuVisible}
              />
              {navMenuVisible && (
                <NavMenu
                  setNavMenuVisible={setNavMenuVisible}
                  navMenuVisible={navMenuVisible}
                />
              )}
              <Home />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
