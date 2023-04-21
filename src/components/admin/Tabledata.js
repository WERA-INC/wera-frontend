import React from "react";

const Tabledata = ({val}) => {
  console.log(val)
  let values = Object.values(val)
  return (
    <tr className="text-left"> 
    {values.map((value)=>{return <td key={value[0]}>{value}</td>})}
      
      {/* <td>{values[1]}</td>
      <td>Clinton</td>
      <td>ICT</td> */}
      <th>
        <div class="checkbox">
          <label>
            <input
              type="checkbox"
              checked
              data-toggle="toggle"
              data-style="ios"
            
              data-offstyle="danger"
              
            />
          </label>
        </div>
      </th>
    </tr>
  );
};

export default Tabledata;
