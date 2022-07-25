const mongoose = require("mongoose")

const db =async() =>{
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("db connected");
  } catch (error) {
      console.log("something went wrong" + error);
      process.exit()
  }
}
module.exports = db

