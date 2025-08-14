import {
  Wheat,
  Droplet,
  BriefcaseMedical,
  Fuel,
  Users,
  BadgeIndianRupee,
} from "lucide-react";
import useResourceStore from "../stores/resourceStore";
import { useState } from "react";
import Shop from "./Shop";

function ShowResources() {
  const { food, water, kits, fuel, volunteers } = useResourceStore();
  const [showShop, setShowShop] = useState(false);

  return (
    <div className="text-xl text-slate-300 flex flex-col gap-y-[10px] p-[10px]">
      <h2 className="text-2xl">Warehouse</h2>
      {showShop && <Shop show={setShowShop} />}
      <div className="flex flex-row">
        <Wheat></Wheat>
        <p className="pl-[10px] text-base">Food: {food} units</p>
      </div>

      <div className="flex flex-row">
        <Droplet />
        <p className="pl-[10px] text-base">Water: {water} units</p>
      </div>
      <div className="flex flex-row">
        <BriefcaseMedical />
        <p className="pl-[10px] text-base">Kits: {kits} units</p>
      </div>
      <div className="flex flex-row">
        <Fuel />
        <p className="pl-[10px] text-base">Fuel: {fuel} units</p>
      </div>
      <div className="flex flex-row">
        <Users />
        <p className="pl-[10px] text-base">Volunteers: {volunteers} units</p>
      </div>
      <div className="flex flex-row justify-around">
        <button
          className="mt-[10px] bg-lime-800 px-[5px] py-[5px] text-base rounded-[7px] text-slate-300 hover:bg-lime-700 transition-colors duration-200"
          onClick={() => {
            setShowShop(true);
          }}
        >
          Buy <BadgeIndianRupee className="inline" height={20} width={20} />
        </button>
      </div>
    </div>
  );
}

export default ShowResources;
