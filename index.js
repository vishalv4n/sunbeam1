var express=require("express");
var app=express();
app.use("/emp",(request,response)=>{
response.send("hello world");
});
app.use("/student",(request,response)=>{
    response.send("hello future");
    });
    app.use("/college",(request,response)=>{
        response.send("list of college");
        });
app.listen(4000,()=>{
    console.log("server started");
})