const express = require("express")
const mongoose = require("mongoose");
const InstructorModel = require("./model/Job")
const cors = require("cors")
const app = express()
const PORT  = 8080;


const connect = 'mongodb+srv://anuragsidhu:test123@cluster0.nnj9xje.mongodb.net/panel'

app.use(express.json());

app.use(cors())

mongoose.connect(connect)
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB Atlas:', error);
    });

app.get("/",(req,res)=>{
    res.send("Get Route of JAPAN")
})
app.listen(PORT,()=>{
console.log("Listening on ",PORT);
})

app.post("/Create",async (req,res)=>{
try {

    const createData = await InstructorModel.create({
        Name:req.body.Name,
        CompanyName:req.body.CompanyName,
        Location:req.body.Location,
        Description:req.body.Description
    })

  return  res.json({createData})
} catch (error) {
  return  res.json(error)
}
})

app.get("/allJob" , async (req,res)=>{
    try {
        const getData = await InstructorModel.find();
        return res.json(getData)
    } catch (error) {
        return res.json({error})
    }
})

app.get("/Job/:id" , async (req,res)=>{
    try {
        const id = req.params.id;
        const getData = await InstructorModel.findById(id);
        return res.json(getData)
    } catch (error) {
        return res.json({error})
    }
})