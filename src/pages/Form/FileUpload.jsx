import axios from "axios";
import { useState } from "react";

const FileUpload = () => {
    const url = 'http://localhost:{your localhost}/user/upload';
    const [file, setFile] = useState("");
    const [uploadedImage, setUploadedImage] = useState("");
    const uploadFile = (e) => {
        // console.log(e.target.files[0]);
        let image = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(image);

        reader.onload = () => {
            // console.log(reader.result);
            setFile(reader.result);
        }
    }

    const upload = () => {
        axios.post(url, {file})
        .then((result) => {
            // console.log(result);
            setUploadedImage(result.data.myImage);
        })
    }
    return (
        <>
        <div className='container text-center mt-5 pt-5 col-3'>
          <h3><i>UPLOAD FILE</i></h3>
          <input type="file" className='form-control border border-success mt-3' onChange={(e) => uploadFile(e)}/>
          <button className='mt-4 btn btn-success w-100' onClick={upload}>Upload</button>
  
          <div className='text-start'>
              <img src={uploadedImage} alt="" className='img-fluid mt-5' style={{height:"80px", width:"80px", borderRadius:"500px"}}/>
          </div>
        </div>
        </> 
    );
};

export default FileUpload;