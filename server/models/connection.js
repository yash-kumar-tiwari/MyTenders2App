import mongoose from "mongoose";

const url = "mongodb://localhost:27017/myTendersApp2_ReactJS";

mongoose.connect(url);

console.log("Connection Established Successfully with Database...")