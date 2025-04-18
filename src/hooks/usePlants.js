import { useContext } from "react";
import PlantsContext from "../context/PlantsContext";

export function usePlants() {
  const context = useContext(PlantsContext);
  if (!context) {
    throw new Error("Must be within plants provider");
  }
  return context;
}
