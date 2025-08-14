import { useEffect } from "react";
import useMapStore from "./stores/mapStore.js";
import Homes from "./layout/map-icons/Homes.jsx";
import PineTree from "./layout/map-icons/PineTree.jsx";
import Buildings from "./layout/map-icons/Buildings.jsx";
import Plain from "./layout/map-icons/Plain.jsx";
import DeciduousTrees from "./layout/map-icons/DeciduousTrees.jsx";
import MultipleTrees from "./layout/map-icons/MultipleTrees.jsx";
import Water from "./layout/map-icons/Water.jsx";
import RentProperty from "./layout/map-icons/RentProperty.jsx";
import Warehouses from "./layout/map-icons/Warehouses.jsx";
function Map() {
  const { generateMap, resetMap } = useMapStore();
  useEffect(() => {
    if (!window.hasGenerated) {
      resetMap();
      generateMap();
      window.hasGenerated = true;
    }
  }, []);

  return (
    <div className="map-container bg h-screen flex-1 bg-blue-200 text-black border-right">
      <h1 className="text-center mb-5 text-gray-500">Map</h1>
      <div className="map border-all grid grid-cols-20 grid-rows-20 w-[640px] h-[550px] gap-5 overflow-auto scrollable">
        <Homes></Homes>
        <PineTree></PineTree>
        <Buildings></Buildings>
        <Plain></Plain>
        <DeciduousTrees></DeciduousTrees>
        <MultipleTrees></MultipleTrees>
        <Water></Water>
        <RentProperty></RentProperty>
        <Warehouses></Warehouses>
      </div>
    </div>
  );
}

export default Map;
