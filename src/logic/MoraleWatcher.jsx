import { useEffect, useRef } from "react";
import useMapStore from "../components/stores/mapStore";
import useResourceStore from "../components/stores/resourceStore";
import depletionRates from "../config/DepletionRates";
function MoraleDecrease() {
  const { houseData, buildingData } = useMapStore();
  const { day, decreaseMorale, setMessage, setMoraleIcon } = useResourceStore();
  const toggleRef = useRef(false);
  useEffect(() => {
    let totalEmptyResources = 0;
    let totalSheltersOnFire = 0;
    houseData.forEach((house) => {
      depletionRates.forEach((deplete) => {
        if (house[deplete.item] - house.residents * deplete.rate <= 0) {
          totalEmptyResources++;
        }
      });
      if (house.onFire) {
        totalSheltersOnFire++;
      }
    });

    buildingData.forEach((building) => {
      depletionRates.forEach((deplete) => {
        if (building[deplete.item] - building.residents * deplete.rate <= 0) {
          totalEmptyResources++;
        }
      });
      if (building.onFire) {
        totalSheltersOnFire++;
      }
    });

    if (!toggleRef.current && totalEmptyResources > 0) {
      toggleRef.current = true;
      setMessage(
        `${totalEmptyResources} shelters have empty resources! Refill or morale will drop!`
      );
    } else if (toggleRef.current && totalEmptyResources > 0) {
      toggleRef.current = false;
      decreaseMorale(totalEmptyResources * 2 + totalSheltersOnFire * 5);
      setMessage(
        `Morale decreased because ${totalEmptyResources} shelters had empty resources and ${totalSheltersOnFire} shelters were on fire.`
      );
      setMoraleIcon("💔");
      setTimeout(() => {
        setMoraleIcon("♥️");
      }, 1000 * 5); // 5 seconds for now but change it later
    } else {
      setMessage("No problems reported");
    }
  }, [day]);

  return null;
}

export default MoraleDecrease;
