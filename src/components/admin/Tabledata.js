import React from "react";

const Tabledata = ({ val }) => {
  console.log(val);
  let values = Object.values(val);
  return (
    <tr className="text-left">
      {values.map((value) => {
        return <td>{values[0] == value ? value.split("T")[0] : value}</td>;
      })}

      {/* <td>{values[1]}</td>
      <td>Clinton</td>
      <td>ICT</td> */}
      <td>
        <div class="custom-control custom-switch">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customSwitches"
          />
          <label class="custom-control-label" for="customSwitches"></label>
        </div>
      </td>
    </tr>
  );
};

export default Tabledata;
