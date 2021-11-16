import React from "react";
import { useStateValue } from "../../StateProvider";
import "./Product.css";

const Product = ({ id, title, image, price, rating }) => {
  const [{}, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="productInfo">
        <p>{title}</p>
        <p className="productPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="productRating">
          <p>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <i key={i} className="fas fa-star productStar"></i>
              ))}
          </p>
        </div>
      </div>
      <img src={image} alt="Product" />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
