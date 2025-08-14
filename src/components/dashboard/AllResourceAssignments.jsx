import GrayButton from "../ui/GrayButton";
import SingleResourceAssignment from "./widgets/SingleResourceAssignment";

function AllResourceAssignment(props) {
  return (
    <div className="assign-resources border-t-[3px] border-slate-700 p-[10px]">
      <SingleResourceAssignment
        Id={props.Id}
        type={props.type}
        resource="food"
        name="Food"
      />
      <SingleResourceAssignment
        Id={props.Id}
        type={props.type}
        resource="water"
        name="Water"
      />
      <SingleResourceAssignment
        Id={props.Id}
        type={props.type}
        resource="kits"
        name="Kits"
      />
      <SingleResourceAssignment
        Id={props.Id}
        type={props.type}
        resource="fuel"
        name="Fuel"
      />
      <SingleResourceAssignment
        Id={props.Id}
        type={props.type}
        resource="volunteers"
        name="Volunteers"
      />
      <SingleResourceAssignment
        Id={props.Id}
        type={props.type}
        resource="residents"
        name="Residents"
      />

      <GrayButton
        onClick={() => {
          props.setAssignClicked(false);
          props.setSelected(null);
        }}
        text="Close"
      />
    </div>
  );
}

export default AllResourceAssignment;
