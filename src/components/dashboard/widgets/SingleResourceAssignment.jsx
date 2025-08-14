import useMapStore from "../../stores/mapStore";
import useResourceStore from "../../stores/resourceStore";
import { useState } from "react";
import SliderInput from "../../ui/SliderInput";
import NumberInput from "../../ui/NumberInput";
import ActionIcon from "../../ui/ActionIcon";

function SingleResourceAssignment({ Id, type, resource, name }) {
  const { houseData, buildingData, updateHouse, updateBuilding } =
    useMapStore();
  const { [resource]: available, removeResource } = useResourceStore();
  let shelter;
  if (type === "house") {
    shelter = houseData.find((h) => h.id === Id);
  } else if (type === "building") {
    shelter = buildingData.find((b) => b.id === Id);
  }
  const total = "total" + name;
  const maxNeededResource = shelter ? shelter[total] - shelter[resource] : 0;
  const [amount, setAmount] = useState(0);

  return (
    <label className="text-slate-300 text-base">
      {name} to assign: <br />
      <div className="flex flex-row items-center mt-[10px]">
        <SliderInput
          max={maxNeededResource}
          available={available}
          amount={amount}
          setAmount={setAmount}
        />
        <NumberInput
          max={maxNeededResource}
          available={available}
          amount={amount}
          setAmount={setAmount}
        />
        <ActionIcon
          onClick={() => {
            if (amount > 0 && amount <= available) {
              if (type === "house")
                updateHouse(Id, {
                  [resource]: shelter[resource] + parseInt(amount),
                });
              else {
                updateBuilding(Id, {
                  [resource]: shelter[resource] + parseInt(amount),
                });
              }
              removeResource([resource], parseInt(amount));
              setAmount(0);
            }
          }}
        />
      </div>
    </label>
  );
}
export default SingleResourceAssignment;
