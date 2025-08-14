function HoverInfo({ classes = "", name = "", count, message, children }) {
  //Can take classes, name, count, message as props
  //Any component using HoverInfo should have "group" and "relative" classes to avoid unexpected behavior
  return (
    <>
      <div
        className={`absolute top-[-30px] left-1/2 -translate-x-1/2 
                bg-black text-white text-xs px-2 py-1 rounded text-nowrap
                opacity-0 group-hover:opacity-100 transition duration-200 ${classes}`}
      >
        {name}
        {count ? " " + count : ""}
        {(name || count) && <br />}
        {message ? message : ""}
        {children}
      </div>
    </>
  );
}

export default HoverInfo;
