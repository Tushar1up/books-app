const express = require("express")
const app = express();
const port = 3000;
const cors = require("cors")
const mongoose = require("mongoose")
require('dotenv').config();


//middleware
app.use(cors());
app.use(express.json());

//routes 
const bookmarkroute = require("./routes/bookmark-router");
const connectdb = require("./db");
app.use("/",bookmarkroute);


//database

connectdb();



app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})