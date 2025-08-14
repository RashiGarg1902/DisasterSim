function NumberInput({
  amount,
  setAmount,
  max,
  available,
  classes = "",
  minOverride,
  maxOverride,
}) {
  return (
    <input
      className={`ml-[10px] bg-slate-600 rounded-[5px] text-slate-300 inline w-[70px] ${classes}`}
      type="number"
      value={amount < max ? amount : max}
      onChange={(e) => setAmount(e.target.value)}
      min={minOverride ?? 0}
      max={maxOverride ?? (max < available ? max : available)}
    />
  );
}

export default NumberInput;
