import React,{useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'

const Updateimages = () => {
    const [img, setimg] = useState("")
    const params =useParams()
    const navigate =useNavigate();

const imgdata =(e)=>{
    setimg(e.target.files[0])
}

const updateimg =async(e)=>{
    e.preventDefault()
    const formdata =new FormData()
    formdata.append("photo",img)

const config ={
    headers:{
        "Content-Type":"multipart/form-data"
    }
}

const result =await axios.put( `http://localhost:3000/upload/${params.id}`,formdata,config)
if(result){
    navigate("/img")
}
else{
    alert("img not updated")
}


}

   



  return (
    <div>
        <form >
            <input type="file" name="photo" onChange={imgdata} />
            <button onClick={updateimg}>Updateimg</button>
        </form>
    </div>
  )
}

export default Updateimages