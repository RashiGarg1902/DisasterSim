import { TreePine } from "lucide-react";
import useMapStore from "../../stores/mapStore";
import MapIconWrapper from "../../ui/MapIconWrapper";

function PineTree() {
  const { pineTreesPos } = useMapStore();
  return (
    <>
      {pineTreesPos.map((tree, index) => (
        <MapIconWrapper key={index} gridCol={tree.x} gridRow={tree.y}>
          <TreePine
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

export default PineTree;
