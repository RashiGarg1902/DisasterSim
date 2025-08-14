import { useState } from "react";
import prices from "../../../config/ResourcePrices";
import useResourceStore from "../../stores/resourceStore";
import GreenButton from "../../ui/GreenButton";

function BuyShopItem(props) {
  const [amount, setAmount] = useState(0);
  const { money, removeMoney, addResource } = useResourceStore();
  function updateResources(amount) {
    removeMoney(prices[`${props.resourceName.toLowerCase()}Price`] * amount);
    addResource(props.resourceName.toLowerCase(), amount);
  }

  return (
    <div className="flex flex-row items-center justify-center space-x-3 mt-4">
      {props.icon}
      <p className="text-xl text-white">{props.resourceName}</p>

      <div className="flex items-center space-x-2">
        <GreenButton
          classes="w-7 h-7"
          onClick={() => {
            amount - 1 >= 0 ? setAmount(amount - 1) : setAmount(0);
          }}
          text="-"
        />

        <input
          type="number"
          className="w-[50px] h-[30px] text-center rounded-md outline-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          value={amount}
          onChange={(event) => {
            setAmount(parseInt(event.target.value));
          }}
        />

        <GreenButton
          classes="w-7 h-7"
          onClick={() => {
            setAmount(amount + 1);
          }}
          text="+"
        />

        <GreenButton
          classes="px-3 py-1 text-sm hover:text-lg"
          onClick={() => {
            updateResources(amount);
            setAmount(0);
          }}
          text="Buy"
        />

        <GreenButton
          classes="px-3 py-1 text-sm hover:text-lg"
          onClick={() => {
            setAmount(
              Math.floor(
                money / prices[`${props.resourceName.toLowerCase()}Price`]
              )
            );
            let am = Math.floor(
              money / prices[`${props.resourceName.toLowerCase()}Price`]
            );
            updateResources(am);
            setAmount(0);
          }}
          text="Buy Max"
        />
      </div>
    </div>
  );
}

export default BuyShopItem;
