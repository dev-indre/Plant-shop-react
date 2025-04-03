import "./Components-style/Header.css";
import Logo from "../assets/img/Logo.svg";
import Search from "../assets/img/Search.svg";
import Cart from "../assets/img/Cart.svg";

export default function Header() {
    return (
   <div className="header-bg">
    <div className="wrapper header">
        <a href="#">
            <img src={Logo} alt="Logo" /></a>
            <nav className="header-links">
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">About us</a>
                <a href="#">Contact us</a>
            </nav>
        <div className="header-right">
            <div className="header-search">
                Search
                <img src={Search} alt="Search_icon"/>
            </div>
            <div className="shop-cart">
                <a href="#"><img src={Cart} alt="Cart_icon" />
                <span className="cart-number"> 3</span>
                </a>
            </div>
    </div>
    </div>
   </div>
    )
  }