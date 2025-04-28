import "./Components-style/Header.css";
import Logo from "../assets/img/Logo.svg";
import Search from "../assets/img/Search.svg";
import Cart from "../assets/img/Cart.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-bg">
      <div className="wrapper header">
        <a href="#">
          <img src={Logo} alt="Logo" />
        </a>
        <nav className="header-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/contact">Contact us</NavLink>
        </nav>
        <div className="header-right">
          <div className="header-search">
            Search
            <img src={Search} alt="Search_icon" />
          </div>
          <div className="shop-cart">
            <a href="#">
              <img src={Cart} alt="Cart_icon" />
              <span className="cart-number"> 3</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
