import HoverInfo from "./HoverInfo";
import FillIndicator from "./FillIndicator";

function StatBar({ item, amount, total, pClasses = "", divClasses = "" }) {
  return (
    <>
      <p className={`text-slate-300 text-base pl-[10px] ${pClasses}`}>{item}</p>
      <div
        className={`w-[100px] bg-gray-800 rounded h-[7px] m-[10px] relative group ${divClasses}`}
      >
        <FillIndicator amount={amount} total={total} />
        <HoverInfo classes="!top-[-10px]" name={`${amount} / ${total}`} />
      </div>
    </>
  );
}

export default StatBar;
