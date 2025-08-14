import { useState } from "react";
import useMapStore from "./stores/mapStore";
import ShelterStatus from "./dashboard/ShelterStatus";
import ShowResources from "./dashboard/ShowResources";
import useResourceStore from "./stores/resourceStore";
import ResourceDepletor from "../logic/ResourceDepletor";
import MoraleDecrease from "../logic/MoraleWatcher";
import ExplainEvent from "./dashboard/ExplainEvent";
import HostEvent from "./dashboard/HostEvent";
import Fire from "../logic/Fire";

function DashBoard() {
  const { mapGenerated } = useMapStore();
  const { money, morale, day, message, moraleIcon } = useResourceStore();
  const [showExplain, setShowExplain] = useState(false);
  const [hostEvent, setHostEvent] = useState(false);
  if (!mapGenerated)
    return (
      <div className="bg h-screen flex-1 bg-gray-100 text-black border-left">
        <h1 className=" text-center mb-5 text-gray-500">
          Management Dashboard
        </h1>
        <div className="h-5/6 bg-gray-700 border-all grid grid-cols-8 grid-rows-10 gap-[2px]">
          <div className="animate-pulse row-start-5 col-start-3 col-span-4 row-span-5 text-slate-300 text-5xl">
            Loading map data...
          </div>
        </div>
      </div>
    );
  if (morale <= 30)
    return (
      <div className="bg h-screen flex-1 bg-gray-100 text-black border-left">
        <h1 className=" text-center mb-5 text-gray-500">
          Management Dashboard
        </h1>
        <div className="h-5/6 bg-gray-700 border-all grid grid-cols-8 grid-rows-10 gap-[2px]">
          <div className="animate-pulse row-start-5 col-start-3 col-span-4 row-span-5 text-slate-300 text-5xl">
            Game over
          </div>
          <button
            className="animate-pulse row-start-6 col-start-3 bg-lime-700 text-white rounded-md px-6 py-3 text-5xl w-fit h-fit text-nowrap hover:bg-lime-600 hover:text-6xl"
            onClick={() => {
              window.location.reload();
            }}
          >
            Play again?
          </button>
        </div>
      </div>
    );
  return (
    <div className="bg h-screen flex-1 bg-gray-100 text-black border-left">
      <h1 className=" text-center mb-5 text-gray-500">Management Dashboard</h1>
      <div className="h-5/6 bg-gray-700 border-all grid grid-cols-8 grid-rows-10 gap-[2px]">
        {/* Grid items here */}
        <div className="col-span-8 flex items-center justify-center border-top bg-slate-500">
          <h2 className="text-slate-300 text-s3xl pl-[5px]">
            Resource Manager
          </h2>
        </div>
        <div className="col-span-8 flex items-center justify-between bg-gray-700">
          <h2 className="text-slate-300 text-2xl ml-[20px]">Day {day}</h2>
          <h2 className="text-slate-300 text-2xl">
            {moraleIcon}
            {morale}%
          </h2>
          <h2 className="text-slate-300 text-2xl mr-[20px]">
            ₹{money.toLocaleString("en-IN")}
          </h2>
        </div>
        <div className="col-span-8 flex items-center bg-slate-500 rounded-[10px] mx-[20px] overflow-y-auto scrollable">
          <p className="text-slate-300 text-xl p-[10px]">
            <MoraleDecrease />
            <Fire />
            {message}
          </p>
        </div>
        <div className="col-span-5 row-span-7 flex items-stretch max-h-[calc(100vh-200px)] bg-gray-700 rounded-[10px] m-[10px] ml-[20px] mb-[20px] pt-[2px] pb-[2px] p-[10px] overflow-y-auto scrollable">
          <ShelterStatus />
          <ResourceDepletor />
        </div>
        <div className="col-start-6 col-span-3 row-span-4 flex bg-slate-500 rounded-[10px] m-[10px] mr-[20px] ml-0 overflow-auto scrollable">
          <ShowResources></ShowResources>
        </div>
        <div className="col-start-6 col-span-3 row-span-3 flex items-center bg-slate-500 rounded-[10px] mr-[20px] mb-[20px]">
          <div className="flex flex-col text-slate-300 text-2xl p-[10px]">
            {!hostEvent && (
              <button
                className="bg-lime-700 text-white rounded-md px-6 py-3 text-lg w-fit h-fit text-nowrap hover:bg-lime-600 hover:text-xl"
                onClick={() => {
                  setHostEvent(true);
                }}
              >
                Host An Event
              </button>
            )}
            {hostEvent && <HostEvent setShow={setHostEvent} />}
            <button
              className="text-white rounded-md px-3 py-3 text-xl w-fit h-fit text-nowrap hover:text-2xl"
              onClick={() => {
                setShowExplain(true);
              }}
            >
              what is an event?
            </button>
            {showExplain && <ExplainEvent show={setShowExplain} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
