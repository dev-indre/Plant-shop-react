import Button from "./Button";
import "./Components-style/BestCard.css";

export default function BestCard({ title, imgSrc }) {
  return (
    <div className="best-card">
      <a href="#" className="best-card-link">
        <img src={imgSrc} alt={title} />
        <div className="best-overlay">
          <h3 className="best-title">{title}</h3>
        </div>
      </a>
      <Button colorName={"green-btn"}>Shop Now</Button>
    </div>
  );
}
