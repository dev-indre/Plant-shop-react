import Title from "./Title";
import "./Components-style/BestSection.css";
import BestList from "./BestList";

export default function BestSection() {
  return (
    <section className="wrapper best-section">
      <Title text1={"Best"} text2={"Selling"} showLink={true} />
      <BestList />
    </section>
  );
}
