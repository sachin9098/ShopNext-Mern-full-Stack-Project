const mongoose = require("mongoose")
const connectDB = async ()=>{
      try{
       const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database has been connected successfully on ${process.env.MONGO_URI}`)
      }
      catch(error){
        console.error('Database connection has been failed due to ', error.message)
        process.exit(1);
    }
    
}
module.exports = connectDB;