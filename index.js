var express=require("express");
var adminrouter=require("./admin");
var app=express();
 app.use("/emp",adminrouter);
app.listen(4001,()=>{
    console.log("server started");
})
