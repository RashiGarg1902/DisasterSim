import { Wheat, Droplet, BriefcaseMedical, Fuel } from "lucide-react";
import BuyShopItem from "./widgets/BuyShopItem";

function Shop(props) {
  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-content bg-gray-500">
        <h1 className="text-3xl">Shop</h1>
        <div className="flex flex-col mt-[10px] justify-start">
          <BuyShopItem
            resourceName="Food"
            icon={<Wheat className="text-white" width={30} height={30} />}
          />
          <BuyShopItem
            resourceName="Water"
            icon={<Droplet className="text-white" width={30} height={30} />}
          />
          <BuyShopItem
            resourceName="Kits"
            icon={
              <BriefcaseMedical className="text-white" width={30} height={30} />
            }
          />
          <BuyShopItem
            resourceName="Fuel"
            icon={<Fuel className="text-white" width={30} height={30} />}
          />
          <button
            className="text-3xl mt-9"
            onClick={() => {
              props.show(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default Shop;
