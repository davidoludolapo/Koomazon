import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Search from "./Search";
import PersonIcon from '@material-ui/icons/Person';

function Header({ handleSearchNote }) {
  const [{basket, user}, dispatch] = useStateValue()

  const handleAuthentication = () => {
      if (user) {
        auth.signOut()
      }
  }


  console.log(basket);
  return (
    <nav className="header">
      <Link to="/">
        <h3
          className="header__logo"
        >Koomazon</h3>
      </Link>

      <div className="header__search">
        <Search/>
      </div>

      <div className="header__nav">
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineTwo"><PersonIcon/></span>
          </div>
        </Link>
        <Link to={!user && '/login'} className="header__link">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
       
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingCart/>
            <span className="header__optionLineTwo header__baskeCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
