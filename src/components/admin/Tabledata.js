import React from "react";

const Tabledata = ({ val, slug }) => {
  // console.log(val);
  let values = Object.values(val);
  return (
    <tr
      className="text-left "
      onClick={() => {
        // navigator(`/jobs/${application.opportunity.id}`);
      }}
    >
      {values.map((value) => {
        return (
          <td className="px-3 py-3 border-y-4 border-gray-950 dashboard-row text-white text-sm mb-1 cursor-pointer">
            <p className="whitespace-no-wrap">
              {values[3] == value ? value.split("T")[0] : value}
            </p>
          </td>
        );
      })}

      {/* <td>{values[1]}</td>
      <td>Clinton</td>
      <td>ICT</td> */}
      <td className="px-3 py-3 border-y-4 border-gray-950 dashboard-row text-white text-sm ">
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" checked />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500"></div>
        </label>
      </td>
    </tr>
  );
};

export default Tabledata;
// {
//   values[0] !== undefined
//     ? null
//     : values[4] == value
//     ? value.split("T")[0]
//     : value;
// }
// if (slug == "opportunities") {
//   navigator(`/jobs/${values[0]}`);
// }
