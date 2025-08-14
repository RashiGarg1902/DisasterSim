function ExplainEvent(props) {
  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-content bg-gray-500">
        <h1 className="text-3xl">What is an event?</h1>
        <div className="flex flex-col mt-[10px] justify-start">
          <p className="text-lg">
            Events are the primary way for a player to earn money. <br />{" "}
            Players can choose to host events which require an initial
            investment and return profits after 5 days. Players need to invest a
            minimum of ₹5,000 to host an event. Events have a guarantee to
            generate a 15% profit on the amount of money invested. Players have
            a random chance to obtain additional 0 - 25% profit.
          </p>
          <button
            className="text-3xl mt-9"
            onClick={() => {
              props.show(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default ExplainEvent;
