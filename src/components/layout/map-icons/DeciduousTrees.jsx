import MapIconWrapper from "../../ui/MapIconWrapper";
import useMapStore from "../../stores/mapStore";
import { TreeDeciduous } from "lucide-react";
function DeciduousTrees() {
  const { DeciduousTreesPos } = useMapStore();

  return (
    <>
      {DeciduousTreesPos.map((tree, index) => (
        <MapIconWrapper key={index} gridCol={tree.x} gridRow={tree.y}>
          <TreeDeciduous
            className="place-self-center"
            height={30}
            width={30}
            stroke="#1E3A1E"
          />
        </MapIconWrapper>
      ))}
    </>
  );
}

export default DeciduousTrees;
