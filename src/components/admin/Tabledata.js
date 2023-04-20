import React from "react";

const Tabledata = () => {
  return (
    <tr className="p"> 
      <td>12/11/2022</td>
      <td>Bill</td>
      <td>Clinton</td>
      <td>ICT</td>
      <th>
        <div class="checkbox">
          <label>
            <input
              type="checkbox"
              checked
              data-toggle="toggle"
              data-style="ios"
              data-onstyle="info"
              data-offstyle="danger"
            />
          </label>
        </div>
      </th>
    </tr>
  );
};

export default Tabledata;
