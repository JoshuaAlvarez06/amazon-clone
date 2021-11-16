import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";
import "./NavMenu.css";

const NavMenu = ({ setNavMenuVisible }) => {
  const [{ cart, user }] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="navMenu" onClick={() => setNavMenuVisible(false)}>
      <div className="navMenuContainer">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="navMenuOption">
            <span className="navMenuOptionLineOne">Hello Guest,</span>
            <span className="navMenuOptionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="navMenuOption">
            <span className="navMenuOptionLineOne">Returns</span>
            <span className="navMenuOptionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="navMenuOption">
          <span className="navMenuOptionLineOne">Your</span>
          <span className="navMenuOptionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="navMenuOptionBasket">
            <i className="fas fa-shopping-basket"></i>
            <span className="navMenuOptionLineTwo navMenuBasketCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
