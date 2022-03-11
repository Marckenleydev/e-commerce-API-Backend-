const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const productRoute = require("./routes/product");
const stripeRoute = require("./routes/stripe");
const mongoose = require("mongoose");
const dotenv=require('dotenv');
const cors = require("cors");
app.use(cors());
dotenv.config();


app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
app.use("/api/checkout",stripeRoute);



mongoose
.connect(process.env.DATABASE_URL)
.then(()=> console.log("DB Connection Successfull")).catch((err)=>{
    console.log(err);
})

app.get('/', (req,res)=>{
    res.send("hello to mern-ecommerce API")
})

app.listen(process.env.PORT || 8001 , ()=>{
    console.log("Backend server is running")
})