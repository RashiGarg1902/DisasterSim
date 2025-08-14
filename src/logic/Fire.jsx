import { useEffect } from "react";
import useResourceStore from "../components/stores/resourceStore";
import useMapStore from "../components/stores/mapStore";

function Fire() {
  const { day, setMessage } = useResourceStore();
  const { houseData, buildingData, updateHouse, updateBuilding } =
    useMapStore();
  let choose;
  let shelterCount;
  useEffect(() => {
    let chance = Math.random();

    if (chance < 0.5) {
      choose = Math.floor(Math.random() * 2);
      if (choose === 0) {
        shelterCount = Math.floor(Math.random() * houseData.length) + 1;
        const house = houseData.find(
          (data) => data.houseCount === shelterCount
        );
        const id = house?.id;
        updateHouse(id, { onFire: true });
        setMessage(
          "🔥House " +
            shelterCount +
            " is on Fire! Send volunteers and water to put out the fire!🔥"
        );
      } else {
        shelterCount = Math.floor(Math.random() * buildingData.length) + 1;
        const building = buildingData.find(
          (data) => data.buildingCount === shelterCount
        );
        const id = building?.id;
        updateBuilding(id, { onFire: true });
        setMessage(
          "🔥Building " +
            shelterCount +
            " is on Fire! Send volunteers and water to put out the fire!🔥"
        );
      }
    }
  }, [day]);
  return null;
}

export default Fire;
