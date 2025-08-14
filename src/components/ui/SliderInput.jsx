function SliderInput({
  max,
  available,
  amount,
  setAmount,
  classes = "",
  minOverride,
  maxOverride,
}) {
  return (
    <input
      className={`bg-cyan-200 rounded-[5px] cursor-pointer accent-lime-500 inline w-[250px] ${classes}`}
      type="range"
      min={minOverride ?? 0}
      max={maxOverride ?? (max < available ? max : available)}
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
    />
  );
}

export default SliderInput;
