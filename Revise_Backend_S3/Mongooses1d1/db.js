const mongoose=require("mongoose")

const main=async()=>{
    try{
        const connection=await mongoose.connect("mongodb://127.0.0.1:27017/backend")
        console.log("connected")
        
        // connection.disconnect()
        // console.log("disconnected")
    }catch(err){
        console.log(err)
    }
 
}
main()

//creating structure of the data that i want to store in database
const studentSchema=mongoose.Schema({
    name:String,
    age:Number,
    city:String,
    location:String,
})
const StudentModel=mongoose.model("student",studentSchema)