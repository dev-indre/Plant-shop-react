import useFetch from "../hooks/useFetch";

export default function CategoriesList() {
  const { data: categories } = useFetch(
    "https://gist.githubusercontent.com/dev-indre/e3e05a3775956bcbdd53317cc2d7d573/raw/e226914777e9a1a161454986a243981c4214f903/categories.json"
  );
  return <div className="categories-list">CategoriesList</div>;
}
