import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Tabledata = ({ val, slug }) => {
  const navigator=useNavigate()
  let values = Object.values(val);
  // console.log(values)
  const [isDisabled, setIsDisabled]= useState(values[5])
  function handleDisable(event){
    const formData = {
      disabled: event.target.checked
    };
    // console.log(event.target.checked)
    fetch(`http://localhost:3000/${slug}/${values[0]}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then(res=>res.json())
    .then(data=>{
      setIsDisabled(data.disabled);
      // navigator('/admin-dashboard')
    })

  }
  return (
    <tr
      className="text-left "
      style={{ backgroundColor: isDisabled ? "#68091de6" : "#031524e6" }}
    >
      {values.map((value) => {
        return (
          <td className="px-3 py-3 border-y-4 border-gray-950 text-white text-sm mb-1 ">
            <p className="whitespace-no-wrap">
              {values[0] == value
                ? null
                : values[4] == value
                ? value.split("T")[0]
                : values[5] == value
                ? null
                : value}
            </p>
          </td>
        );
      })}
      <td
        className="px-3 py-3 border-y-4 border-gray-950 text-center text-white text-sm mb-1 cursor-pointer cursor-pointer"
        onClick={() => {
          navigator(`/${slug}/${values[0]}`);
        }}
      >
        <p className="whitespace-no-wrap ">view</p>
      </td>
      {slug == "employers" || slug == "profiles" ? (
        <td className="px-3 py-3 border-y-4 border-gray-950 text-white text-sm mx-auto">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isDisabled}
              className="sr-only peer"
              onChange={handleDisable}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500"></div>
          </label>
        </td>
      ) : null}
    </tr>
  );
};

export default Tabledata;

