// Correct import
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, } from 'react-router-dom';
import CounterFunctional from "./components/CounterFunctional";
import CounterClass from './components/CounterClass';
import Signup from './pages/Form/Signup';
import Login from './pages/Form/Login';
import "./styles.css";
import FileUpload from './pages/Form/FileUpload';
import Dashboard from './pages/Form/dashboard';

const App = () => {

  // let nameedit = "edit"
  useEffect(() => {
    if ("ServiceWorker" in navigator) {
      window.addEventListener("load", ()=>{
        navigator.serviceWorker
        .register("sw.js")
        .then((registration)=>{
          console.log("sw register", registration);
        })
        .catch((registrationError)=>{
          console.log("sw registoin failed", registrationError);
        })
      })
    }
  }, [])
  let token = localStorage.token


  return (
    <>

      {/* <h1>Counter App</h1>
      <hr />
      <p>Ex: Functional</p>
      <CounterFunctional />

      <p>Ex: Class Based</p>
      <CounterClass /> */}

    <Router>
      <Routes>
        <Route path="/class" element={<CounterClass />} />
        <Route path="/counter" element={<CounterFunctional />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/dashboard' element={token ? <Dashboard/> : <Navigate to="/login"/>}/>
        <Route path="/file" element={<FileUpload />} />
      </Routes>
      
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />

        </Router>
    </>
  );
}

export default App;
