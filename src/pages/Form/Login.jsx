import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate()
  const [mymail, mail] = useState("")
  const [mypass, pass] = useState("")
  const Signin = () => {
      let url = "http://localhost:5000/user/login"
      axios.post(url, { email: mymail, password: mypass })
          .then((response) => {
              toast[response.data.status ? 'success' : "error"](response.data.message)
              if (response.data.status == true) {
                      localStorage.token = response.data.token
                      navigate("/dashboard")
              }
          })
          .catch((err) => {
              console.log(err);
              toast(err.response.data.message)
          })
  }

  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 col-sm-12 mx-auto text-center border border-2 rounded-2 p-3 mt-5 shadow'>
                <h3 className='fw-bold text-success'>Login</h3>
                <input type="text" className='my-2 form-control' onChange={(e) => mail(e.target.value)} placeholder='Email' />
                <input type="text" className='my-2 form-control' onChange={(e) => pass(e.target.value)} placeholder='Password' />
                <button className='btn btn-primary' onClick={Signin}>Sign In</button>
            </div>
        </div>
    </div>

</>

  )
}

export default Login;