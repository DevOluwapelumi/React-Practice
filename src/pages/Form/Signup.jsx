import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Signup = () => {

  const navigate = useNavigate()
  const [myname, fname] = useState("")
  const [myphone, phonenum] = useState("")
  const [mymail, mail] = useState("")
  const [mypass, pass] = useState("")
  const clickme = () => {
    if (myname == "" || myphone == "" || mymail == "" || mypass == "") {
      toast("enter you input")
    }
    else {
      let url = "http://localhost:5000/user/register"
      axios.post(url, { firstName: myname, phoneo: myphone, email: mymail, password: mypass })
        .then((response) => {
          console.log(response);
          toast(response.data.message)
          if (response.data.status == true) {
            setTimeout(() => {
              navigate("/login")
            }, 1600);
          }
        })
        .catch((err) => {
          console.log(err);
          toast(err.response.data.message)
        })
    }
  }

  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 col-sm-12 mx-auto text-center border border-2 rounded-2 p-3 mt-5 shadow'>
          <h3 className='fw-bold text-success'>Sign-Up</h3>
          <input type="text" className='my-2 form-control' onChange={(e) => fname(e.target.value)} placeholder='FirstName' />
          <input type="text" className='my-2 form-control' onChange={(e) => phonenum(e.target.value)} placeholder='Phone-num' />
          <input type="text" className='my-2 form-control' onChange={(e) => mail(e.target.value)} placeholder='Email' />
          <input type="text" className='my-2 form-control' onChange={(e) => pass(e.target.value)} placeholder='Password' />
          {/* <Link to="/textin"> */}
          <button className='btn btn-primary' onClick={clickme}> Click-me</button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  </>

  )
}

export default Signup;