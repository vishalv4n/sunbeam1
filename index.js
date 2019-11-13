var express=require("express");
var app=express();
app.use("/emp",(request,response)=>{
response.send("hello world");
});
app.listen(4000,()=>{
    console.log("server started");
})