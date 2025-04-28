import "./Components-style/Footer.css";
import FB from "../assets/img/social/facebook.svg";
import Youtube from "../assets/img/social/youtube.svg";
import Insta from "../assets/img/social/instagram.svg";
import Twitter from "../assets/img/social/twitter.svg";
import Linkedin from "../assets/img/social/linkedin.svg";

export default function Footer() {
  return (
    <footer className="light-bg footer">
      <div className="second-menu wrapper">
        <nav className="second-menu-links">
          <a href="">Products</a>
          <a href="">Returns</a>
          <a href="">FAQ</a>
          <a href="">Shipping</a>
          <a href="">About Us</a>
          <a href="">Contact Us</a>
        </nav>
        <nav className="second-menu-links">
          <a href="">
            <img src={Youtube} alt="youtube-icon" />
          </a>
          <a href="">
            <img src={FB} alt="facebook-icon" />
          </a>
          <a href="">
            <img src={Twitter} alt="twitter-icon" />
          </a>
          <a href="">
            <img src={Insta} alt="instagram-icon" />
          </a>
          <a href="">
            <img src={Linkedin} alt="linkedin-icon" />
          </a>
        </nav>
      </div>
      <div className="footer-banner">
        <p className="footer-banner-text">
          Copyright Green thumb. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
