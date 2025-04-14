import Button from "./Button";

export default function BestCard({ title, imgSrc }) {
  return (
    <div className="best-card">
      <a href="#">
        <img src={imgSrc} alt={title} />
        <div>
          <h3>{title}</h3>
        </div>
      </a>
      <Button colorName={"green-btn"}>Shop Now</Button>
    </div>
  );
}
