import Button from "./Button";
import "./Components-style/PlantCard.css";

export default function PlantCard({ plantId, title, imgSrc, price }) {
  return (
    <div className="plant-card">
      <a>
        <div className="img-box">
          <img src={imgSrc} alt={title} />
        </div>
        <div className="card-text">
          <h3 className="plant-title">{title}</h3>
          <div className="plant-price">{price}</div>
        </div>
      </a>
      <Button colorName={"green-btn"}>Buy</Button>
    </div>
  );
}
