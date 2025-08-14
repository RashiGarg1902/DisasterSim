import { useEffect } from "react";
import useMapStore from "../components/stores/mapStore";
import useResourceStore from "../components/stores/resourceStore";
import depletionRates from "../config/DepletionRates";

function ResourceDepletor() {
  const { houseData, buildingData, updateHouse, updateBuilding } =
    useMapStore();
  const { dayTime, increaseDay } = useResourceStore();
  useEffect(() => {
    const interval = setInterval(() => {
      houseData.forEach((house) =>
        depletionRates.forEach((rate) => {
          updateHouse(house.id, {
            [rate.item]: Math.max(
              0,
              house[rate.item] - rate.rate * house.residents
            ),
          });
        })
      );
      buildingData.forEach((building) =>
        depletionRates.forEach((rate) => {
          updateBuilding(building.id, {
            [rate.item]: Math.max(
              0,
              building[rate.item] - rate.rate * building.residents
            ),
          });
        })
      );
      increaseDay();
    }, dayTime); //for now 6 mins cuz i'm working

    return () => clearInterval(interval);
  }, [houseData, buildingData]);

  return null; // this component only runs logic
}

export default ResourceDepletor;
