var express=require("express");
var adminrouter=require("./admin");
var app=express();
var app=conlog();
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
 app.use("/emp",adminrouter);

 app.use("/emp",adminrouter

app.listen(4001,()=>{
    console.log("server started");
})

