import React from "react";
import { useStateValue } from "../../StateProvider";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, image, title, price, rating, hideBtn }) => {
  const [{}, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProductImage" src={image} alt={title} />
      <div className="checkoutProductInfo">
        <p className="checkoutProductTitle">{title}</p>
        <p className="checkoutProductPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProductRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <i key={i} className="fas fa-star productStar"></i>
            ))}
        </div>
        {!hideBtn && <button onClick={removeFromCart}>Remove from Cart</button>}
      </div>
    </div>
  );
};

export default CheckoutProduct;
