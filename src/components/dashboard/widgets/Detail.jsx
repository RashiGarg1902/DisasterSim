import StatBar from "../../ui/StatBar";

function Detail(props) {
  return (
    <div
      className={`flex flex-row items-center text-slate-300 text-xl ${
        props.classes ? props.classes : ""
      }`}
    >
      <StatBar item={props.item1} amount={props.amount1} total={props.total1} />
      <StatBar item={props.item2} amount={props.amount2} total={props.total2} />
    </div>
  );
}

export default Detail;
