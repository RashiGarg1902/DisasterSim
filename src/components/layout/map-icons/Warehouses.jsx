import { Warehouse } from "lucide-react";
import { mapIconClass } from "../../../constants/classes";
import MapIconWrapper from "../../ui/MapIconWrapper";
import HoverInfo from "../../ui/HoverInfo";

function Warehouses() {
  return (
    <>
      <MapIconWrapper gridCol={10} gridRow={10} rowSpan={2} colSpan={2}>
        <Warehouse
          className={mapIconClass}
          height={60}
          width={60}
          stroke="#FACC15"
        />
        <HoverInfo name="WareHouse" />
      </MapIconWrapper>
    </>
  );
}

export default Warehouses;
