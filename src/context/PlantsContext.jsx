import { createContext } from "react";
import useFetch from "../hooks/useFetch";

const PlantsContext = createContext();

export function PlantsProvider({ children }) {
  const {
    data: plants,
    loading,
    error,
  } = useFetch(
    "https://gist.githubusercontent.com/dev-indre/55e4ce4734d5bb199090b10a90e451e8/raw/d6b80bc9d96b62b3d8c88bb486928d0c4d3aefdd/plant.json",
    "plants",
    "image"
  );
  const value = { plants, loading, error };
  console.log(value);
  return (
    <PlantsContext.Provider value={value}>{children}</PlantsContext.Provider>
  );
}
export default PlantsContext;
