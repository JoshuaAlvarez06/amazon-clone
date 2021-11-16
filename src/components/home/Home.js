import React from "react";
import Product from "../product/Product";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useStateValue } from "../../StateProvider";
import { Link } from "react-router-dom";

const Home = () => {
  const [{ user }] = useStateValue();

  AOS.init();

  return (
    <div className="home">
      <div className="homeContainer">
        {!user && (
          <div className="homeSignInContainer">
            <div className="homeSignIn">
              <h3>Sign in for the best experience</h3>
              <Link className="homeSignInBtn" to="/login">
                Sign in securely
              </Link>
            </div>
          </div>
        )}
        <img
          className="homeImage"
          src="https://m.media-amazon.com/images/I/611UiKJ2UAL._SX3000_.jpg"
          alt="Banner"
        />
        <div className="homeRow" data-aos="fade-up" data-aos-duration="500">
          <Product
            id="1"
            title="Wonder"
            price={12.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/41k1HQF0PnL.jpg"
          />
          <Product
            id="2"
            title="Ticova Ergonomic Office Chair - High Back Desk Chair with Adjustable Lumbar Support, Headrest & 3D Metal Armrest - 130° Rocking Mesh Computer Chair"
            price={279.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61+dM90OaoS._AC_SL1500_.jpg"
          />
        </div>
        <div className="homeRow" data-aos="fade-up" data-aos-duration="500">
          <Product
            id="3"
            title="Electric Standing Desk, 52 x 28 Inches Whole Piece Desktop, Quick Assembly, Ultra-Quiet Adjustment, Stand Up Desk Black HOD1A"
            price={229.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61yAUdN6BKS._AC_SY200_.jpg"
          />
          <Product
            id="4"
            title="2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip with 8‑core CPU and 14‑core GPU, 16GB RAM, 512GB SSD) - Space Gray"
            price={1999}
            rating={5}
            image="https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_SL1500_.jpg"
          />
          <Product
            id="5"
            title="SAMSUNG 55-Inch Class Crystal UHD AU8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN55AU8000FXZA, 2021 Model)"
            price={579.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71LJJrKbezL._AC_SL1500_.jpg"
          />
        </div>
        <div className="homeRow" data-aos="fade-up" data-aos-duration="500">
          <Product
            id="6"
            title="Polk Monitor XT15 Pair of Bookshelf or Surround Speakers - Hi-Res Audio Certified, Dolby Atmos & DTS:X Compatible, 1 Terylene Tweeter & 5.25 Dynamically Balanced Woofer, Midnight Black"
            price={149}
            rating={5}
            image="https://m.media-amazon.com/images/I/91m3in9SqBL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
