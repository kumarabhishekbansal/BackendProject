require("dotenv").config();
const express=require("express");
const app=express();
const bodyParser = require("body-parser");
const cookieParser=require("cookie-parser");

// routes

const {userroute}=require("./User/routes");
const {paymentrouter}=require("./Payment/routes");
const {resturantroute}=require("./Resturants/routes");
const {orderroute}=require('./orders/routes');
const {itemroute}=require('./Items/routes');
const {cartroute}=require("./Cart/routes")

const {msgroute}=require("./message/route");
// mongo db connection

require("./db/conn");


// middlewares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use("/api/user",userroute);
app.use('/api/res',resturantroute);
app.use('/orders',orderroute);
app.use('/api/item',itemroute);
app.use('/api/pay',paymentrouter);
app.use('/api/cart',cartroute);
app.use('/api/msg',msgroute);
// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb',extended:true}));

app.get('/',(req,res)=>{
    res.send("home page");
})


app.listen(process.env.PORT,()=>{
    console.log(`app is listening at port no. ${process.env.PORT}`);
})