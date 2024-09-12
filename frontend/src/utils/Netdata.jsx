import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create the context with an initial value 
export const MyContext = createContext();

// Define the Netdata component
export const Netdata = ({ children }) => {
  const [data, setData] = useState([]);
  const [searchterm, setsearchterm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          searchterm
            ? `https://openlibrary.org/search.json?q=${searchterm}`
            : "https://openlibrary.org/search.json?q=the+lord+of+the+rings",
        );
        console.log(response.data.docs);
        setData(response.data.docs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchterm]); // Depend on searchterm so it refetches when it changes

  return (
    <MyContext.Provider value={{ data, setsearchterm, searchterm }}>
      {children}
    </MyContext.Provider>
  );
};
