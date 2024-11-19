const mongoose = require("mongoose");

//2 -create DB

    // 2 -creat DB
    const connectDB = async () => {
    try{
    // step 1
    await mongoose.connect (process.env.MONGO_URI);
    // step 2 
    console.log("database connected ..");

    }catch(error){
    console.log("can not connected !!!", error);
    }
};

// 3 - export
module.exports = connectDB;