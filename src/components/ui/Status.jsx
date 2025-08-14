function Status({ onClick, statusIcon, classes = "" }) {
  return (
    <span
      className={`absolute top-0 left-0 text-base hover:text-lg cursor-pointer animate-bounce ${classes}`}
      onClick={onClick}
    >
      {statusIcon}
    </span>
  );
}

export default Status;
