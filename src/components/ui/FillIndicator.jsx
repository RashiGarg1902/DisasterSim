function FillIndicator({ classes = "", amount, total }) {
  return (
    <div
      className={`h-full bg-lime-700 transition-all duration-300 ${classes}`}
      style={{ width: `${(amount / total) * 100}%` }}
    />
  );
}

export default FillIndicator;
