const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
dotenv.config();
connectDB();
const app = express(); 
app.use(cors());
app.get("/",(req,res)=>{
    res.send("our ShopNext Backend is running properly")
});

app.use('/api/auth',require('./routes/authRoutes'));

const PORT = process.env.PORT || 0001;
app.listen(PORT, ()=>{
console.log(`Our ShopNext backend is running on port ${PORT}`)
});
