const express=require("express")
const mongooes =require("mongoose")
const User =require("./schema/friend")
// const FriendRoute = require("./routes/friend")
const app = express()
const port=3000

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello Chetan")
})
app.get("/movie",(req,res)=>{
    res.send("Welcome to movie ApI")
})
app.get("/friend",async(req,res)=>{
    const data=await User.find()
    res.send(data)
})

app.get("/friend/:id", async(req,res)=>{
    try{
        let user=await User.findById(req.params.id)
        res.send(user)
    
}catch(e){
  res.send(e.message)
}
})

app.post("/friend", async(req,res)=>{
    try{
        const user=await User.create(req.body)
        res.send(user) 
    }catch(e){
    res.status(401).send(e.message)
    }
    })

app.listen(port,async()=>{
    await mongooes.connect(`mongodb+srv://chetan:12345@cluster0.4jf6kcr.mongodb.net/?retryWrites=true&w=majority`)
    console.log(`App start on ${port}`)
})