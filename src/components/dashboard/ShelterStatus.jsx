import { useState } from "react";
import useMapStore from "../stores/mapStore";
import { ClipboardPen } from "lucide-react";
import AllResourceAssignment from "./AllResourceAssignments";
import Detail from "./widgets/Detail";
import GrayButton from "../ui/GrayButton";

function ShelterStatus() {
  const { houseData, buildingData } = useMapStore();
  const [assignClicked, setAssignClicked] = useState(false);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  return (
    <div className="shelter-status w-full h-fit flex flex-col gap-y-[10px] pt-[10px]">
      {houseData.map((house) => (
        <div
          key={house.id}
          id={house.houseCount}
          className="house-status bg-slate-500 rounded-[10px] py-[2px] text-slate-300 text-xl"
        >
          House {house.houseCount}
          <Detail
            item1="Food"
            amount1={house.food}
            total1={house.totalFood}
            item2="Water"
            amount2={house.water}
            total2={house.totalWater}
          />
          <Detail
            item1="Kits"
            amount1={house.kits}
            total1={house.totalKits}
            item2="Fuel"
            amount2={house.fuel}
            total2={house.totalFuel}
          />
          <Detail
            item1="Residents"
            amount1={house.residents}
            total1={house.totalResidents}
            item2="Volunteers"
            amount2={house.volunteers}
            total2={house.totalVolunteers}
          />
          {!assignClicked && (
            <GrayButton
              // classes="assign-resources-button"
              onClick={(event) => {
                setAssignClicked(true);
                setSelectedHouse(house.houseCount);
              }}
            >
              Assign <ClipboardPen className="inline" />
            </GrayButton>
          )}
          {assignClicked &&
            selectedHouse === house.houseCount &&
            !selectedBuilding && (
              <AllResourceAssignment
                setAssignClicked={setAssignClicked}
                setSelected={setSelectedHouse}
                Id={house.id}
                type={house.type}
                onClose={() => {
                  setAssignClicked(false);
                  setSelectedHouse(null);
                }}
              />
            )}
        </div>
      ))}
      {buildingData.map((building) => (
        <div
          key={building.id}
          className="building-status bg-slate-500 rounded-[10px] py-[2px] text-slate-300 text-xl"
        >
          Building {building.buildingCount}
          <Detail
            item1="Food"
            amount1={building.food}
            total1={building.totalFood}
            item2="Water"
            amount2={building.water}
            total2={building.totalWater}
          />
          <Detail
            item1="Kits"
            amount1={building.kits}
            total1={building.totalKits}
            item2="Fuel"
            amount2={building.fuel}
            total2={building.totalFuel}
          />
          <Detail
            item1="Residents"
            amount1={building.residents}
            total1={building.totalResidents}
            item2="Volunteers"
            amount2={building.volunteers}
            total2={building.totalVolunteers}
          />
          <GrayButton
            onClick={() => {
              setAssignClicked(true);
              setSelectedBuilding(building.buildingCount);
            }}
          >
            Assign <ClipboardPen className="inline" />
          </GrayButton>
          {assignClicked &&
            selectedBuilding === building.buildingCount &&
            !selectedHouse && (
              <AllResourceAssignment
                setAssignClicked={setAssignClicked}
                setSelected={setSelectedBuilding}
                Id={building.id}
                type={building.type}
                onClose={() => {
                  setAssignClicked(false);
                  setSelectedBuilding(null);
                }}
              />
            )}
        </div>
      ))}
    </div>
  );
}

export default ShelterStatus;
