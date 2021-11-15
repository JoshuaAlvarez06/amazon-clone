import React from "react";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";
import Subtotal from "../subtotal/Subtotal";
import "./Checkout.css";

const Checkout = () => {
  const [{ cart, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkoutLeft">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Checkout ad"
          className="checkoutAd"
        />
        <div>
          {user && <h3>Hello, {user?.email}</h3>}
          <h2 className="checkoutTitle">
            {cart?.length ? "Your Amazon Cart" : "Your Amazon Cart is empty"}
          </h2>
          {cart.map((item, index) => (
            <CheckoutProduct
              key={index}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkoutRight"></div>
      <div className="checkoutRight">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
