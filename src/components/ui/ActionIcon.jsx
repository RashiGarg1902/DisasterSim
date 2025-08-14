import { CircleCheckBig } from "lucide-react";

function ActionIcon({ onClick, className = "", ...props }) {
  return (
    <CircleCheckBig
      className={`p-[5px] text-lime-500 hover:text-lime-400 hover:h-[40px] hover:w-[40px] inline ${className}`}
      height={30}
      width={30}
      onClick={onClick}
      {...props}
    />
  );
}

export default ActionIcon;
