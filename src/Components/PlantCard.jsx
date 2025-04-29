import { Link } from "react-router-dom";
import Button from "./Button";
import "./Components-style/PlantCard.css";
import Image from "./Image";

export default function PlantCard({
  plantId,
  title,
  imgSrc,
  price,
  discount,
  description,
}) {
  const discountedPrice = discount
    ? (price * (1 - discount / 100)).toFixed(2)
    : price;

  const plantData = {
    plantId,
    title,
    imgSrc,
    price,
    discount,
    discountedPrice,
    description,
  };

  return (
    <div className="plant-card">
      <Link to={`/products/${plantId}`} state={plantData}>
        <div className="img-box">
          {discount > 0 && (
            <div className="discount-block">
              <div>{discount}%</div>
              <div>off</div>
            </div>
          )}
          <Image className={"plant-img"} src={imgSrc} alt={title} />
          {/* <img src={imgSrc} alt={title} className="plant-img" /> */}
        </div>
        <div className="card-text">
          <h3 className="plant-title">{title}</h3>
          {discount > 0 ? (
            <>
              <span className="plant-price">{discountedPrice} €</span>
              <span className="plant-price-red">{price} €</span>
            </>
          ) : (
            <span className="plant-price">{price} €</span>
          )}
        </div>
      </Link>
      <Button colorName={"green-btn"}>Buy</Button>
    </div>
  );
}
