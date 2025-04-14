import CategoriesList from "./CategoriesList";
import Title from "./Title";
import "./Components-style/CategoriesSection.css";

export default function CategoriesSection() {
  return (
    <section className="wrapper section-categories">
      <Title text1="Shop" text2="by category" showLink={false} />
      <CategoriesList />
    </section>
  );
}
