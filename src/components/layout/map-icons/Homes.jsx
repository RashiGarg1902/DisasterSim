import { Home } from "lucide-react";
import useMapStore from "../../stores/mapStore";
import PutOutFire from "../../../logic/PutOutFire";
import MapIconWrapper from "../../ui/MapIconWrapper";
import HoverInfo from "../../ui/HoverInfo";
import { mapIconClass } from "../../../constants/classes";
import Status from "../../ui/Status";

function Homes() {
  const { houseData } = useMapStore();
  return (
    <>
      {houseData.map((house, index) => (
        <MapIconWrapper key={index} gridCol={house.x} gridRow={house.y}>
          <Home
            className={`${mapIconClass} ${house.extraClasses}`}
            height={30}
            width={30}
            style={{ pointerEvents: "auto" }}
          />
          {house.onFire && (
            <Status
              onClick={() => {
                PutOutFire(house.id, "house");
              }}
              statusIcon="🔥"
            />
          )}
          <HoverInfo
            name="House"
            count={house.houseCount}
            message={house.fireMessage}
          />
        </MapIconWrapper>
      ))}
    </>
  );
}

export default Homes;
