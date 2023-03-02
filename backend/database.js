const mongoose =require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/fileuploadingcrud").then(()=>{
    console.log("connection succesfull");
})

const Schema =new mongoose.Schema({
    img:{
        type:String,
        required:true
    }
})


const userimg =mongoose.model("Userimg",Schema)

module.exports =userimg