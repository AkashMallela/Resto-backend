import mongoose from "mongoose";

const dbConnection = ()=>{
    mongoose
    .connect(process.env.MONGOOSE_URI,{
        dbName: "Restaurant",
    })
    .then(()=>{
        console.log("Database connected");
    })
    .catch((err)=>{
        console.log(err);
    })
}

export default dbConnection