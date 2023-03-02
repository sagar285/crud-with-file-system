import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Imgupload = () => {
  const [img, setimg] = useState(" ");
  const navigate =useNavigate()

  const imgdata = (e) => {
    setimg(e.target.files[0]);
  };

  const imgupload = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("photo", img);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const result = await axios.post(
      "http://localhost:3000/upload",
      formdata,
      config
    );
    if (result) {
      navigate("/img");
    } else {
      alert("img not added");
    }
  };

  return (
    <div>
      <form>
        <input type="file" name="photo" onChange={imgdata} />
        <button onClick={imgupload}>Submit</button>
      </form>
    </div>
  );
};

export default Imgupload;
