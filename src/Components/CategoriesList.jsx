import useFetch from "../hooks/useFetch";
import DataHandler from "../utils/DataHandler";
import Category from "./Category";

export default function CategoriesList() {
  const {
    data: categories,
    loading,
    error,
  } = useFetch(
    "https://gist.githubusercontent.com/dev-indre/e3e05a3775956bcbdd53317cc2d7d573/raw/e226914777e9a1a161454986a243981c4214f903/categories.json",
    "category",
    "fileName"
  );
  console.log(categories);
  return (
    <div className="categories-list">
      <DataHandler loading={loading} error={error}>
        {categories.map((category) => (
          <Category
            key={category.id}
            title={category.title}
            imgSrc={category.imgSrc}
          />
        ))}
      </DataHandler>
    </div>
  );
}
