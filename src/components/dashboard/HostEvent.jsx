import useResourceStore from "../stores/resourceStore";
import { useEffect, useState } from "react";
import SliderInput from "../ui/SliderInput";
import NumberInput from "../ui/NumberInput";
import ActionIcon from "../ui/ActionIcon";

function HostEvent(props) {
  const { money, removeMoney, addMoney } = useResourceStore();
  const [amount, setAmount] = useState(5000);
  const [host, setHost] = useState(false);
  useEffect(() => {
    if (host) {
      const timeout = setTimeout(() => {
        let randomProfit = Math.floor(Math.random() * 26); //0 to 25% random profit chance
        const finalProfit =
          Math.floor(amount * 0.15 + amount * (randomProfit / 100)) +
          parseInt(amount);
        addMoney(finalProfit);
        setHost(false);
        setAmount(5000);
        props.setShow(false);
      }, 1000 * 3); //6 minutes is a day and 5 days to host an event  but 3 second right now for testing
      return () => clearTimeout(timeout);
    }
  }, [host]);
  if (host) {
    return (
      <div className="text-slate-300 text-lg animate-pulse ml-2">
        Event is being hosted
      </div>
    );
  }
  return (
    !host && (
      <label className="text-slate-300 text-base">
        Invest Money: <br />
        <div className="flex flex-row items-center mt-[10px]">
          <SliderInput
            classes="!w-[100px]"
            minOverride={money > 5000 ? 5000 : 0}
            maxOverride={money > 5000 ? money : 0}
            amount={amount}
            setAmount={setAmount}
          />
          <NumberInput
            amount={amount}
            setAmount={setAmount}
            max={money}
            minOverride={money > 5000 ? 5000 : 0}
            maxOverride={money > 5000 ? money : 0}
          />
          <ActionIcon
            onClick={() => {
              removeMoney(amount);
              setHost(true);
            }}
          />
        </div>
      </label>
    )
  );
}
export default HostEvent;
