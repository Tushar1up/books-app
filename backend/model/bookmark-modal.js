const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({
    title: String,
    author: String,
    cover: String,  // Changed from Number to String to store the URL
    first_publish_year: Number,
    edition_count: Number
});

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);  // Removed the extra space

module.exports = Bookmark;
