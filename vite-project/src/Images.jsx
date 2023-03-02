import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Images = () => {
const [images, setimages] = useState([])


const getimages =async()=>{
    const result = await axios.get("http://localhost:3000/images")
   setimages(result.data)
}

const deletimg =async(id)=>{
    const result=  await axios.delete(`http://localhost:3000/delete/${id}`) 
    if(result){
        getimages();
    }
    else{
        alert("img not deleted")
    }
   
}

useEffect(()=>{
    getimages()
},[])

  return (
 <div className='flex'>

  {
    images.map((val)=>(
        <>
        <div>
        <img  className='w-[200px] h-[200px] ml-5' src={`http://localhost:3000/uploads/${val.img}`}/>
        <button onClick={()=>deletimg(val._id)}  >Delete</button>
       <Link to={"/update/"+val._id}><button>Update</button></Link>
       </div> 
        </>
    ))
  }


 </div>
  )
}

export default Images