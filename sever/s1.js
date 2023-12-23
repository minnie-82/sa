const express=require("express");
const cors=require("cors");

const app=express();
app.use(cors());


app.get("/find",(req,res)=>{
    let num=req.query.number;
    let ans=num%2==0? "It is even" : "It is Odd";
    res.json({"msg":ans});
})

app.listen(9876,()=>{console.log("Ready to serve @9876");})