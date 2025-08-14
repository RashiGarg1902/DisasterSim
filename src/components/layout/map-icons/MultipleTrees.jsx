import MapIconWrapper from "../../ui/MapIconWrapper";
import useMapStore from "../../stores/mapStore";
import { Trees } from "lucide-react";
function MultipleTrees() {
  const { multipleTreesPos } = useMapStore();

  return (
    <>
      {multipleTreesPos.map((tree, index) => (
        <MapIconWrapper key={index} gridCol={tree.x} gridRow={tree.y}>
          <Trees
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

export default MultipleTrees;
