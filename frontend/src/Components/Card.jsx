import React, { useContext } from "react";
import axios from "axios"; // Import axios
import { MyContext } from "../utils/Netdata"; // Import the context
import { toast } from "react-toastify";

function Card() {
  const { data } = useContext(MyContext); // Access data from context

  const handleBookmark = async (book) => {
    try {
      // Assuming the backend expects a payload with the book details
      const response = await axios.post("http://localhost:3000/", {
        title: book.title,
        author: book.author_name ? book.author_name.join(", ") : "Unknown",
        cover: book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
          : "No Image",
        first_publish_year: book.first_publish_year,
        edition_count: book.edition_count,
      });
      toast(response.data.message); // Handle success
      
    } catch (error) {
      toast.error("Error adding bookmark", error); // Handle error

    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {data.map((value, index) => (
        <div
          key={index}
          className="h-[24rem] w-[15.3281rem] rounded-lg bg-blue-500 p-4 text-white shadow-lg"
        >
          {/* Check if the cover_i is available and construct the cover image URL */}
          {value.cover_i ? (
            <img
              src={`https://covers.openlibrary.org/b/id/${value.cover_i}-M.jpg`}
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
            className="mt-2 rounded bg-yellow-500 px-4 py-2 text-black hover:bg-yellow-600"
          >
            Bookmark it!
          </button>
        </div>
      ))}
    </div>
  );
}

export default Card;
