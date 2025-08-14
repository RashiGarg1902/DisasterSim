import useMapStore from "../../stores/mapStore";
import { Waves } from "lucide-react";
import useResourceStore from "../../stores/resourceStore";
import { useState } from "react";
import MapIconWrapper from "../../ui/MapIconWrapper";
import { mapIconClass } from "../../../constants/classes";
import HoverInfo from "../../ui/HoverInfo";
import ActionIcon from "../../ui/ActionIcon";
function Water() {
  const { wavesData, updateWaves, removeWave } = useMapStore();
  const { volunteers, removeVolunteers, addWater, addVolunteers } =
    useResourceStore();
  const [inter, setInter] = useState();
  return (
    <>
      {wavesData.map((wave, index) => (
        <MapIconWrapper key={index} gridCol={wave.x} gridRow={wave.y}>
          <Waves
            className={`${mapIconClass} ${
              wave.collectionInProgress ? "animate-pulse" : ""
            }`}
            height={30}
            width={30}
            stroke="#60A5FA"
            onClick={() => {
              updateWaves(wave.id, { clicked: true });
            }}
          />
          <HoverInfo
            classes="top-[-30px]"
            name="Available Water: "
            count={wave.waterReserves}
            message={wave.message}
          />
          {wave.clicked && (
            <HoverInfo classes="!top-[30px]">
              {!wave.collectionInProgress && "Collect Water?"}
              {wave.collectionInProgress && "Stop Collection?"}
              <ActionIcon
                onClick={() => {
                  updateWaves(wave.id, {
                    clicked: false,
                  });
                  if (!wave.collectionInProgress) {
                    if (volunteers < 5)
                      updateWaves(wave.id, {
                        message: "Not enough volunteers!",
                      });
                    else {
                      removeVolunteers(5);
                      updateWaves(wave.id, { collectionInProgress: true });
                      setInter(
                        setInterval(() => {
                          const thisWave = useMapStore
                            .getState()
                            .wavesData.find((waves) => waves.id === wave.id);
                          if (!thisWave || thisWave.waterReserves <= 0) {
                            clearInterval(inter);
                            if (thisWave) removeWave(thisWave.id);
                          }

                          updateWaves(thisWave.id, {
                            waterReserves: thisWave.waterReserves - 1,
                          });
                          addWater(1);
                        }, 200)
                      );
                    }
                  } else {
                    addVolunteers(5);
                    clearInterval(inter);
                    updateWaves(wave.id, { collectionInProgress: false });
                  }
                }}
              />
            </HoverInfo>
          )}
        </MapIconWrapper>
      ))}
    </>
  );
}

export default Water;
