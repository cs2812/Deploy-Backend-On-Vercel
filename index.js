const express=require("express")
const app = express()
const port=3000

app.get("/",(req,res)=>{
    res.send("Hello Chetan")
})

app.listen(port,()=>{
    console.log(`App start on ${port}`)
})