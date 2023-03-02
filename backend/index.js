const express =require("express")
const app =express()
const userimg =require("./database")
const multer =require("multer")
const cors =require("cors")

app.use(cors())
app.use(express.json())
app.use("/uploads",express.static("./uploads"))


const imgconfig =multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads")
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}.${file.originalname}`)
    }
})

const isimage =(req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(new Error("images allowed only"))
    }
}

const upload =multer({
    storage:imgconfig,
    fileFilter:isimage
})



//create route 
app.post("/upload",upload.single("photo"),async(req,res)=>{
    const {filename} =req.file
    const imguser =new userimg({img:filename})
    const saveimage =await imguser.save()
    res.send(saveimage)
})


//read route

app.get("/images",async(req,res)=>{
    const userimages =await userimg.find({})
    res.send(userimages)
})


// update route

app.put("/upload/:id",upload.single("photo"),async(req,res)=>{
    const {filename} =req.file
    const {id} =req.params
    const updateimg =await userimg.findByIdAndUpdate({_id:id},{img:filename},{new:true})
    res.send(updateimg)
})

// delete route

app.delete("/delete/:id",async(req,res)=>{
    const {id} =req.params;
    const deletedata =await userimg.findByIdAndDelete({_id:id})
    res.send(deletedata)
})





app.listen(3000,()=>{
    console.log("server listening on 3000");
})