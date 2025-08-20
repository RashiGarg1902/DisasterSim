function MapIconWrapper({
  gridCol,
  gridRow,
  rowSpan = 1,
  colSpan = 1,
  children,
}) {
  return (
    <div
      className="w-[30px] h-[30px] relative group"
      style={{
        gridColumnStart: gridCol,
        gridRowStart: gridRow,
        gridColumnEnd: gridCol + colSpan,
        gridRowEnd: gridRow + rowSpan,
      }}
    >
      {children}
    </div>
  );
}

export default MapIconWrapper;
