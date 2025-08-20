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
              {console.log(wave.id)}
              {console.log(typeof wave.id)}
              <ActionIcon
                id={wave.id}
                onClick={(event) => {
                  const clickedWave = useMapStore
                    .getState()
                    .wavesData.find((waves) => waves.id === event.target.id);
                  updateWaves(clickedWave.id, {
                    clicked: false,
                  });
                  console.log(`event id ${event.target.id}`);
                  console.log(`type ${typeof event.target.id}`);
                  console.log(event.target.id === wave.id);
                  console.log(clickedWave);

                  if (!clickedWave.collectionInProgress) {
                    if (volunteers < 5)
                      updateWaves(clickedWave.id, {
                        message: "Not enough volunteers!",
                      });
                    else {
                      removeVolunteers(5);
                      updateWaves(clickedWave.id, {
                        collectionInProgress: true,
                      });
                      console.log(
                        `Collection started for reserve ${wave.count}`
                      );
                      updateWaves(clickedWave.id, {
                        interval: setInter(
                          setInterval(() => {
                            const thisWave = useMapStore
                              .getState()
                              .wavesData.find(
                                (waves) => waves.id === clickedWave.id
                              );
                            if (!thisWave || thisWave.waterReserves <= 0) {
                              clearInterval(inter);
                              if (thisWave) removeWave(thisWave.id);
                            }

                            updateWaves(thisWave.id, {
                              waterReserves: thisWave.waterReserves - 1,
                            });
                            addWater(1);
                          }, 200)
                        ),
                      });
                      // setInter(
                      //   setInterval(() => {
                      //     const thisWave = useMapStore
                      //       .getState()
                      //       .wavesData.find((waves) => waves.id === clickedWave.id);
                      //     if (!thisWave || thisWave.waterReserves <= 0) {
                      //       clearInterval(inter);
                      //       if (thisWave) removeWave(thisWave.id);
                      //     }

                      //     updateWaves(thisWave.id, {
                      //       waterReserves: thisWave.waterReserves - 1,
                      //     });
                      //     addWater(1);
                      //   }, 200)
                      // );
                    }
                  } else {
                    console.log(
                      `Collection is being stopped for reserve ${wave.count}`
                    );

                    addVolunteers(5);
                    clearInterval(clickedWave.interval);
                    // clearInterval(inter);
                    updateWaves(clickedWave.id, {
                      collectionInProgress: false,
                    });
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
