const mongoose = require("mongoose")

const Job = new mongoose.Schema({
Name:String,
CompanyName:String,
Location:String,
Description:String,
})

const InstructorModel = mongoose.model("Job", Job)

module.exports = InstructorModel
