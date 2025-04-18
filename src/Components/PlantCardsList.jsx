import "./Components-style/PlantCardsList.css";
import DataHandler from "../utils/DataHandler";
import { usePlants } from "../hooks/usePlants";

export default function PlantCardsList() {
  const { plants, loading, error } = usePlants();
  console.log(plants);
  return (
    <div className="plant-cards-list">
      <DataHandler loading={loading} error={error}></DataHandler>
    </div>
  );
}
