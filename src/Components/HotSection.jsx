import Title from "./Title";
import "./Components-style/HotSection.css";

export default function HotSection() {
  return (
    <section className="light-bg">
      <div className="wrapper hot-section">
        <Title text1={"Hottest"} text2={"Plants"} showLink={true} />
      </div>
    </section>
  );
}
