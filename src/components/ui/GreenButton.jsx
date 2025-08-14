function GreenButton({ classes = "", onClick, text = "", children }) {
  return (
    <button
      className={`bg-lime-700 text-white rounded-md text-nowrap hover:bg-lime-600 ${classes}`}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
}

export default GreenButton;
