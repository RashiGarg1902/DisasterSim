import MapIconWrapper from "../../ui/MapIconWrapper";
import useMapStore from "../../stores/mapStore";
function Plain() {
  const { plainPos } = useMapStore();

  return (
    <>
      {plainPos.map((plain, index) => (
        <MapIconWrapper key={index} gridCol={plain.x} gridRow={plain.y} />
      ))}
    </>
  );
}

export default Plain;
