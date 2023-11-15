import {useState} from 'react'
import axios from 'axios'
import {useFormik}from 'formik'
import * as Yup from 'yup'
import './Form.css'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'

// import logo from '../../assets/logo-removebg-preview.png'
// import logoImg from '../../assets/logoimg-removebg-preview.png'
const Signup = () => {
    let locate = useNavigate()
    const [cps, setcps] = useState("")
    let url = 'http://localhost:5000/user/backendsignup'
    const formik = useFormik({
        initialValues:{
            fullname:"",
            username:"", 
            phoneNo:"", 
            email:"", 
            password:"", 
        },
        validationSchema:Yup.object({
            fullname: Yup.string().max(40, 'Must be 40 characters or less').required('Required'),
            // phoneNo:Yup.number().min.max(11, 'phone number should be 11 digit').required('Required'),
            email:Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(8,'Password should be 8 character or more than').required('Required')
        }) ,
        onSubmit: (values)=>{
            console.log(values);
            if(values.fullname=="" || values.username=="" || values.phoneNo=="" || values.email=="" || values.password==""){
                // Swal.fire({
                //     icon: 'error',
                //     title: 'Fill all your details',
                // })
            }
            if(values.password!==cps){
                // Swal.fire({
                //     icon: 'error',
                //     title: 'Password mismatch',
                // })
            }
            else{
                console.log(values);
                axios.post(url, {
                    fullname:values.fullname, 
                    username:values.username,
                    phoneNo:values.phoneNo,
                    email:values.email,
                    psword:values.password,
               
                })
            .then((response)=>{
                console.log(response);
                if(response.data.message=="Sucessfully sign up"){
                    // Swal.fire(
                    //     response.data.message,
                    //     'Wait a moment',
                    //     'success'
                    //   )
                      setTimeout(() => {
                        locate('/login')
                      }, 1300);
                }
            }).catch((err)=>{
                console.log(err);
                // Swal.fire({
                //     icon: 'error',
                //     title: 'Error occur while signup',
                //   })
            })
            }
        }
    })
  return (
    <div>
        <div className="container shadow mt-4 p-0 border bg-white d-flex">
            <div className='side-div'>
                <div>
                <div className="logo-div text-center mx-auto">
                    {/* <img src={logoImg} alt=""  className='w-75 mt-4'/><br />
                    <img src={logo} alt=""  className='w-75' style={{marginTop:"-60px"}}/> */}
                </div>
                </div>
            </div>
            <div className='p-1 inp-div'>
            <form onSubmit={formik.handleSubmit} action="">
                <p className="fs-2 fw-bold text-center">Sign Up</p>
                <div className="p-1 border" style={{ background: "rgba(0, 89, 255, 0.048)", borderRadius:"0px" }}>
                    <input 
                    name='fullname'
                    value={formik.values.fullname} 
                    onChange={formik.handleChange} 
                    type="text" 
                    className="border inp-1" 
                    placeholder="Full Name" />
                </div>
                <div className="d-flex mt-3">
                    <div className="mx-3 w-25 label d-flex justify-content-center" style={{ paddingTop: "20px" }}>
                        <p className=''>User-name</p>
                    </div>
                    <div className="w-75 border d-inp p-1" style={{ background: "rgba(0, 89, 255, 0.048)" }}>
                        <input 
                        name='username'
                        value={formik.values.username} 
                        onChange={formik.handleChange} 
                        placeholder='User name'
                        type="text"
                        className="inp-1"/>
                    </div>
                </div>
                <div className="d-flex mt-3">
                    <div className="mx-3 w-25 label d-flex justify-content-center" style={{ paddingTop: "20px" }}>
                        <p className=''>Phone No</p>
                    </div>
                    <div className='pops shadow p-1 text-danger fw-bold' style={{position:"absolute", backgroundColor:"white", marginTop:"-28px"}}>
                    <small>{formik.errors.phoneNo}</small>
                    </div>
                    <div className="w-75 border d-inp p-1" style={{ background: "rgba(0, 89, 255, 0.048)" }}>
                        <input 
                        name='phoneNo'
                        value={formik.values.phoneNo} 
                        onChange={formik.handleChange} 
                        placeholder='Phone number'
                        type="number"
                        className="inp-1" />
                    </div>
                </div>
                <div className='pops shadow p-1 text-danger fw-bold' style={{position:"absolute", backgroundColor:"white", marginTop:"-15px"}}>
                    <small>{formik.errors.email}</small>
                </div>
                <div className="p-1 mt-3 border" style={{background: "rgba(0, 89, 255, 0.048)" }}>
                    <input type="text"
                    name='email'
                    className="border inp-1" 
                    value={formik.values.email} 
                    onChange={formik.handleChange} 
                    placeholder="Email"/>
                </div>
                <div className="d-flex gap-2">
                <div className='pops shadow p-1 text-danger fw-bold' style={{position:"absolute", backgroundColor:"white", marginTop:"-15px"}}>
                    <small>{formik.errors.password}</small>
                </div>
                    <div className="p-1 w-50 mt-3 border" style={{ background: "rgba(0, 89, 255, 0.048)" }}>
                        <input type="text"
                        name='password'
                        value={formik.values.password} 
                        onChange={formik.handleChange} 
                        className="border inp-1" 
                        placeholder="Password"/>
                    </div>
                    <div className="p-1 w-50 mt-3 border" style={{ background: "rgba(0, 89, 255, 0.048)" }}>
                        <input type="text"
                        className="border inp-1" 
                        placeholder="Confirm-Password" 
                        onChange={(e)=>{setcps(e.target.value)}}/>
                    </div>
                </div>
                <p>Already have account <Link to={'/login'}><span className='text-primary fw-bold'>Login</span></Link></p>
                <div className="d-flex w-50 gap-2 mt-4 mx-auto" style={{ marginLeft: "auto" }}>
                    <button type='submit' className="inp-1 border border-rounded fw-bold" style={{ background: "rgba(0, 89, 255, 0.397)", cursor:"pointer" }}>
                        Sign Up
                    </button>
                </div>
            </form>
            </div>
            <div className="contact-div p-1 mt-5 ">
                <div className='logo2' style={{visibility:"hidden"}}>
                    {/* <img src={logo} alt=""/> */}
                </div>
                <p className='fw-bold text-center text-primary fs-4 mt-1'>Contact Us</p>
                <div className="d-flex justify-content-between px-5 h-25" style={{alignItems:"center"}}>
                <div className="circle shadow text-center pt-2">
                    <p><i className="bi bi-linkedin"></i></p>
                </div>
                <div className="circle shadow text-center pt-2">
                    <p><i className="bi bi-twitter"></i></p>
                </div>
                <div className="circle shadow text-center pt-2">
                    <p><i className="bi bi-facebook"></i></p>
                </div>
                <div className="circle shadow  text-center pt-2">
                    <i className="bi bi-instagram"></i>
                </div>
                </div>
                <div className="text-center about">
                    <Link>About Us</Link>
                    <p>Terms and Condition</p>
                </div>
                <div className="last-div pt-3">
                    <p className='text-center text-white'>@Konet.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup