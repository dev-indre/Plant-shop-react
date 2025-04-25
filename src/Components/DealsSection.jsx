import "./Components-style/DealsSection.css";
import PlantCardsList from "./PlantCardsList";
import Title from "./Title";

export default function DealsSection() {
  return (
    <section className="wrapper deals-section">
      <Title text1={"Ferntastic"} text2={"Deals"} showLink={false} />
      <PlantCardsList filterType={"deal"} limit={4} />
    </section>
  );
}
