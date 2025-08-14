import useMapStore from "../components/stores/mapStore";

export function createHouse({ x, y }) {
  return {
    id: crypto.randomUUID(),
    houseCount: useMapStore.getState().houseData.length + 1,
    x: x,
    y: y,
    type: "house",
    residents: 0,
    totalResidents: 4,
    food: 100,
    totalFood: 100,
    water: 500,
    totalWater: 500,
    kits: 200,
    totalKits: 200,
    fuel: 1000,
    totalFuel: 1000,
    volunteers: 0,
    totalVolunteers: 1,
    onFire: false,
    fireMessage: null,
  };
}
