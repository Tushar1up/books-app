import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../utils/Netdata";

function Searchbar() {
  const { setsearchterm } = useContext(MyContext);
  const [inputValue, setInputValue] = useState(""); // Local state for input
  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setsearchterm(debouncedValue); // Set searchterm after a delay
    }, 500); // 500ms delay

    // Cleanup function: clear the timeout if the user types again within the delay
    return () => {
      clearTimeout(handler);
    };
  }, [debouncedValue, setsearchterm]); // Only trigger when debouncedValue changes

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setDebouncedValue(e.target.value); // Update local state immediately
  };

  return (
    <div className="my-4 flex justify-center">
      <input
        type="text"
        value={inputValue}
        placeholder="Search Books..."
        onChange={handleChange}
        className="w-80 rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default Searchbar;
