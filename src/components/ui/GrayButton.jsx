function GrayButton({ classes = "", onClick, text = "", children }) {
  return (
    <button
      className={`mt-[10px] bg-slate-700 px-[5px] py-[5px] text-base rounded-[5px] text-slate-300 hover:bg-slate-600 transition-colors duration-200 ${classes}`}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
}

export default GrayButton;
