const express=require("express")

const app=express()
app.use(express.static("public"))
app.get("*", (req,res)=>{
    res.send("index.html")
})
app.listen(process.env.PORT||3001,()=>{
    console.log(`Server is running at http://127.0.0.1:${process.env.PORT||3001}`)
})