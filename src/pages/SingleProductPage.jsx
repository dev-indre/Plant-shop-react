import { useLocation } from "react-router-dom";
import Image from "../Components/Image";
import Button from "../Components/Button";
import "./SingleProductPage.css";
import Title from "../Components/Title";
import PlantCardsList from "../Components/PlantCardsList";

export default function SingleProductPage() {
  const location = useLocation();
  const plantData = location.state;
  console.log(plantData);
  return (
    <>
      <div className="light-bg">
        <div className="wrapper">
          <h2 className="second-title">
            <span className="big-text">Plant</span>
            <span className="plant-name">{plantData.title}</span>
          </h2>
        </div>
      </div>
      <div className="wrapper plant-content">
        <div className="image-block">
          {/* <img src={plantData.imgSrc} alt="" className="plant-image"/> */}
          <Image
            src={plantData.imgSrc}
            alt={plantData.title}
            className="plant-image"
          />
          <Image
            src={plantData.imgSrc}
            alt={plantData.title}
            className="plant-image"
          />
          <Image
            src={plantData.imgSrc}
            alt={plantData.title}
            className="plant-image"
          />
          <Image
            src={plantData.imgSrc}
            alt={plantData.title}
            className="plant-image"
          />
        </div>
        <div className="data-block">
          <h3>{plantData.title}</h3>
          <h4>{plantData.price} €</h4>
          <p>{plantData.description}</p>
          <Button colorName={"green-btn"}>Add to cart</Button>
        </div>
      </div>
      <div className="light-bg">
        <div className="wrapper instruction-block">
          <div className="example">Plant instruction</div>
        </div>
      </div>
      <div className="wrapper random-cards">
        <Title text1={"You'll love"} text2={"these too ..."} showLink={false} />
        <PlantCardsList filterType={"deal"} limit={4} />
      </div>
    </>
  );
}
