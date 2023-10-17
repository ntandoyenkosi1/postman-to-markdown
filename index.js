const express=require("express")
const {convertJSONtoMarkDown} =require("./utils/index.js")
const app=express()
app.use(express.static("public"))
app.use(express.json())
app.post("/api/convert", (req, res)=>{
    console.log(req.body, 1)
    let markdown=convertJSONtoMarkDown(req.body)
    res.status(200).send({file: markdown})
})
app.get("*", (req,res)=>{
    res.send("index.html")
})
app.listen(process.env.PORT||3001,()=>{
    console.log(`Server is running at http://127.0.0.1:${process.env.PORT||3001}`)
})