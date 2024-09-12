import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import axios from "axios";
import Card from "../Components/Card";
import { toast } from 'react-toastify';

function Addproducts() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get("http://localhost:3000/addproduct");
      console.log(response.data);
      setdata(response.data);
    };
    fetchdata();
  }, []);

  const handleBookmark = async (item) => {
    try {
      const response = await axios.delete(`http://localhost:3000/addproduct/${item._id}`);
      toast(response.data.message);

      // Update the state to remove the deleted item from the list
      setdata(data.filter((value) => value._id !== item._id));
    } catch (error) {
      toast.error("Error deleting the bookmark:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-wrap justify-center gap-6">
        {data.map((value, index) => (
          <div
            key={index}
            className="h-[24rem] w-[15.3281rem] rounded-lg bg-blue-500 p-4 text-white shadow-lg"
          >
            {/* Check if the cover_i is available and construct the cover image URL */}
            {value.cover ? (
              <img
                src={value.cover}
                alt={value.title}
                className="mb-4 h-[10rem] w-full rounded object-cover"
              />
            ) : (
              <div className="mb-4 flex h-[10rem] w-full items-center justify-center rounded bg-gray-300">
                <span>No Image</span>
              </div>
            )}

            <h2 className="mb-2 text-lg font-bold">Title: {value.title}</h2>
            <p>
              Author:{" "}
              {value.author_name ? value.author_name.join(", ") : "Unknown"}
            </p>
            <p>Total editions: {value.edition_count || "N/A"}</p>
            <p>First published year: {value.first_publish_year || "N/A"}</p>

            {/* Button for bookmarking */}
            <button
              onClick={() => handleBookmark(value)}
              className="mt-2 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Remove Bookmark
            </button>
          </div>
        ))}
      </div>
      <div>Addproducts</div>
    </>
  );
}

export default Addproducts;
