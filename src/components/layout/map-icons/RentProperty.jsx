import useMapStore from "../../stores/mapStore";
import { CircleDollarSign } from "lucide-react";
import useResourceStore from "../../stores/resourceStore";
import MapIconWrapper from "../../ui/MapIconWrapper";
import { mapIconClass } from "../../../constants/classes";
import HoverInfo from "../../ui/HoverInfo";
import { createHouse } from "../../../constants/newData";
import ActionIcon from "../../ui/ActionIcon";

function RentProperty() {
  const {
    houseData,
    RentPropertyData,
    updateRentPropertyData,
    removeRentProperty,
    addHouseData,
  } = useMapStore();
  const { money, volunteers, removeResource, addResource } = useResourceStore();

  return (
    <>
      {RentPropertyData.map((property, index) => (
        <MapIconWrapper key={index} gridCol={property.x} gridRow={property.y}>
          <CircleDollarSign
            className={mapIconClass}
            height={30}
            width={30}
            stroke="#83a206"
            onClick={() => {
              updateRentPropertyData(property.id, { clicked: true });
            }}
          />
          <HoverInfo
            classes="top-[-40px]"
            name="Property for Rent"
            message={`Cost ${property.cost}`}
          />

          {property.clicked && (
            <HoverInfo classes="top-[30px]" message={property.message}>
              Buy Property?
              <ActionIcon
                classes="!inline"
                onClick={() => {
                  if (money < property.cost) {
                    updateRentPropertyData(property.id, {
                      message: "Not enough money!",
                    });
                  } else if (volunteers < 5) {
                    updateRentPropertyData(property.id, {
                      message: "Not enough volunteers!",
                    });
                  } else {
                    removeResource("money", property.cost);
                    removeResource("volunteers", 5);
                    addHouseData(createHouse({ x: property.x, y: property.y }));
                    removeRentProperty(property.id);
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

export default RentProperty;
