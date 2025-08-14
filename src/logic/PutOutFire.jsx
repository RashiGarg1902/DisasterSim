import useMapStore from "../components/stores/mapStore";
import useResourceStore from "../components/stores/resourceStore";

function PutOutFire(id, type) {
  const { updateHouse, updateBuilding } = useMapStore.getState();
  const { dayTime, water, volunteers, removeResource, addResource } =
    useResourceStore.getState();
  if (type === "house") {
    if (water < 500) {
      updateHouse(id, { fireMessage: "Not enough water!" });
    } else if (volunteers < 5) {
      updateHouse(id, { fireMessage: "Not enough volunteers" });
    } else {
      removeResource("water", 500);
      removeResource("volunteers", 5);
      updateHouse(id, {
        fireMessage: "Fire is being put out...",
        extraClasses: "animate-pulse",
      });
      const timeout = setTimeout(() => {
        addResource("volunteers", 5);
        updateHouse(id, { onFire: false, fireMessage: null, extraClasses: "" });
      }, dayTime / 2); //half a day
    }
  } else {
    if (water < 1000) {
      updateBuilding(id, { fireMessage: "Not enough water!" });
    } else if (volunteers < 10) {
      updateBuilding(id, { fireMessage: "Not enough volunteers" });
    } else {
      removeResource("water", 1000);
      removeResource("volunteers", 10);
      updateBuilding(id, {
        fireMessage: "Fire is being put out...",
        extraClasses: "animate-pulse",
      });
      const timeout = setTimeout(() => {
        addResource("volunteers", 10);
        updateBuilding(id, {
          onFire: false,
          fireMessage: null,
          extraClasses: "",
        });
      }, dayTime / 2); //half a day
    }
  }
  return null;
}

export default PutOutFire;
