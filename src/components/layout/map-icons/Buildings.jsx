import { Building } from "lucide-react";
import useMapStore from "../../stores/mapStore";
import PutOutFire from "../../../logic/PutOutFire";
import HoverInfo from "../../ui/HoverInfo";
import MapIconWrapper from "../../ui/MapIconWrapper";
import { mapIconClass } from "../../../constants/classes";
import Status from "../../ui/Status";

function Buildings() {
  const { buildingData } = useMapStore();
  return (
    <>
      {buildingData.map((building, index) => (
        <MapIconWrapper key={index} gridCol={building.x} gridRow={building.y}>
          <Building
            className={`${mapIconClass} ${building.extraClasses}`}
            height={30}
            width={30}
          />
          {building.onFire && (
            <Status
              onClick={() => {
                PutOutFire(building.id, "building");
              }}
              statusIcon="🔥"
            />
          )}
          <HoverInfo
            name="Building"
            count={building.buildingCount}
            message={building.fireMessage}
          />
        </MapIconWrapper>
      ))}
    </>
  );
}

export default Buildings;
