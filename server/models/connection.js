import mongoose from "mongoose";

const url = "mongodb://127.0.0.1:27017/Tenders2ReactApp";

mongoose.connect(url);

console.log("Connection Established Successfully with Database...")