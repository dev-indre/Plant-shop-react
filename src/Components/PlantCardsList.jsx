import "./Components-style/PlantCardsList.css";
import DataHandler from "../utils/DataHandler";
import { usePlants } from "../hooks/usePlants";
import PlantCard from "./PlantCard";

export default function PlantCardsList({ filterType, limit }) {
  const { plants, loading, error } = usePlants();
  console.log(plants);
  const getFilteredPlants = (plants) => {
    let filtered = plants;
    if (filterType === "hot") {
      filtered = filtered.filter((plant) => plant.rating === 5);
    } else if (filterType === "deal") {
      filtered = filtered.sort((a, b) => b.discount - a.discount);
    }
    return limit ? filtered.slice(0, limit) : filtered;
  };
  const filteredPlants = getFilteredPlants(plants);
  console.log(filteredPlants);
  return (
    <div className="plant-cards-list">
      <DataHandler loading={loading} error={error}>
        {filteredPlants.map((plant) => (
          <PlantCard
            key={plant.id}
            title={plant.title}
            price={plant.price}
            discount={plant.discount}
            imgSrc={plant.imgSrc}
          />
        ))}
      </DataHandler>
    </div>
  );
}
