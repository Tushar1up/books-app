const express = require("express");
const router = express.Router();
const Bookmark = require("../model/bookmark-modal");

router.route("/").post(async (req, res) => {
  try {
    await Bookmark.create(req.body);
    res.json({ message: "book added  " });
  } catch (error) {
    res.json({ message: "error adding book" });
  }
});

router.route("/addproduct").get(async (req, res) => {
  try {
    // Fetch bookmarks from the database
    const data = await Bookmark.find();

    // Send the fetched data as a response
    res.json(data);
  } catch (error) {
    console.error("Error fetching book:", error); // Log the error
    res.status(500).json({ message: "Error " });
  }
});

router.route("/addproduct/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    
    const deletedBook = await Bookmark.findByIdAndDelete(id); // Find and delete the book by ID

    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book deleted successfully", deletedBook });
  } catch (error) {
    res.json({ message: "error deleting book backend" });
  }
});

module.exports = router;
