import PlantCardsList from "../Components/PlantCardsList";
import "./ProductsPage.css";

export default function ProductsPage() {
  return (
    <>
      <div className="light-bg">
        <div className="wrapper">
          <h2 className="second-title">
            <span className="big-text">Shop</span>
            <span className="plant-name">
              Find the perfect plant for your space
            </span>
          </h2>
        </div>
      </div>
      <div className="wrapper products-page">
        <aside className="aside">Filtrai</aside>
        <div className="shop-block">
          <PlantCardsList filterType={"hot"} limit={0} />
        </div>
      </div>
    </>
  );
}
