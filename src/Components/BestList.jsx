import useFetch from "../hooks/useFetch";
import DataHandler from "../utils/DataHandler";
import BestCard from "./BestCard";
import "./Components-style/BestList.css";

export default function BestList() {
  const {
    data: bestCards,
    loading,
    error,
  } = useFetch(
    "https://gist.githubusercontent.com/dev-indre/469228e9caee1351da406690ed2f5e81/raw/10f4d49ddaa9521621e0b6bb82d865ce95bc89f1/BestTags.json",
    "best",
    "fileName"
  );
  console.log(bestCards);
  return (
    <div className="best-list">
      <DataHandler loading={loading} error={error}>
        {bestCards.map((card) => (
          <BestCard key={card.id} imgSrc={card.imgSrc} title={card.title} />
        ))}
      </DataHandler>
    </div>
  );
}
