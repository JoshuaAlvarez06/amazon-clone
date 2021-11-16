import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import "./Header.css";
import { auth } from "../../firebase";

const Header = ({ setNavMenuVisible, navMenuVisible }) => {
  const [{ cart, user }] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const toggleNavMenu = () => setNavMenuVisible(!navMenuVisible);

  return (
    <div className="header">
      <Link to="/" onClick={() => setNavMenuVisible(false)}>
        <img
          className="headerLogo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="headerSearch">
        <input className="headerSearchInput" type="text" />
        {/* Logo */}
        <i className="fas fa-search headerSearchIcon"></i>
      </div>
      {!navMenuVisible ? (
        <i onClick={toggleNavMenu} className="fas fa-bars headerBars"></i>
      ) : (
        <i onClick={toggleNavMenu} className="fas fa-times headerBars"></i>
      )}
      <div className="headerNav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="headerOption">
            <span className="headerOptionLineOne">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="headerOptionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="headerOption">
            <span className="headerOptionLineOne">Returns</span>
            <span className="headerOptionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="headerOption">
          <span className="headerOptionLineOne">Your</span>
          <span className="headerOptionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="headerOptionBasket">
            <i className="fas fa-shopping-basket"></i>
            <span className="headerOptionLineTwo headerBasketCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
