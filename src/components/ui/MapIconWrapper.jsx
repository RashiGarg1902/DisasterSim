function MapIconWrapper({ gridCol, gridRow, children }) {
  return (
    <div
      className="w-[30px] h-[30px] relative group"
      style={{
        gridColumnStart: gridCol,
        gridRowStart: gridRow,
      }}
    >
      {children}
    </div>
  );
}

export default MapIconWrapper;
