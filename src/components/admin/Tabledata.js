import React from "react";

const Tabledata = ({ val }) => {
  // console.log(val);
  let values = Object.values(val);
  return (
    <tr className="text-left">
      {values.map((value) => {
        return (
          <td class="px-3 py-3 border-b border-gray-200 bg-white text-sm">
            <p class="text-gray-900 whitespace-no-wrap">
              {values[0] == value ? value.split("T")[0] : value}
            </p>
          </td>
        );
      })}

      {/* <td>{values[1]}</td>
      <td>Clinton</td>
      <td>ICT</td> */}
      <td class="px-3 py-3 border-b border-gray-200 bg-white text-sm">
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-cyan-950"></div>
        </label>
      </td>
    </tr>
  );
};

export default Tabledata;
