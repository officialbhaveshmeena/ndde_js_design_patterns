const express = require("express")
const app = express()

class ErrorObj {
    commonError(){
        return {
                "status":0,
                "msg":"err found",
            }
        
    }
}
app.get("/a",(req,res)=>{
   try {
     let err=1;
     if(err){
        // res.json({
        //     status:0,
        //     msg:"err found",
        // })
        res.json(new ErrorObj.commonError())
     }
   } catch (error) {
    res.json({
        status:0,
        msg:"500"
    })
   }
})

app.get("/b",(req,res)=>{
    try {
        // res.json({
        //     status:0,
        //        msg:"err found",
        // })
        res.json(new ErrorObj.commonError())

    } catch (error) {
     res.json({
         status:0,
         msg:"500"
     })
    }
})
app.get("/c",(req,res)=>{
    try {
        // res.json({
        //     status:0,
        //     msg:"err found",
        // })
        res.json(new ErrorObj.commonError())

    } catch (error) {
     res.json({
         status:0,
         msg:"500"
     })
    }
})
app.get("/d",(req,res)=>{
    try {
        // res.json({
        //     status:0,
        //     msg:"err found",
        // })
        res.json(new ErrorObj.commonError())

    } catch (error) {
     res.json({
         status:0,
         msg:"500"
     })
    }
})
app.listen(7000,()=>{
    console.log("server is listening on port : 7000")
})