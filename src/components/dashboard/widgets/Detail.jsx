import StatBar from "../../ui/StatBar";

function Detail(props) {
  return (
    <div
      className={`grid grid-cols-[repeat(12,35px)] text-slate-300 text-lg ${props.classes}`}
    >
      <StatBar
        item={props.item1}
        amount={props.amount1}
        total={props.total1}
        pClasses="col-start-1 col-span-2 text-left"
        divClasses="col-start-3 col-span-4"
      />
      <StatBar
        item={props.item2}
        amount={props.amount2}
        total={props.total2}
        pClasses="col-start-7 col-span-2 text-left"
        divClasses="col-start-9 col-span-4"
      />
    </div>
  );
}

export default Detail;
