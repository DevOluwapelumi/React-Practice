import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const navigate = useNavigate();
  let url = "http://localhost:5000/user/dashboard";
  const [user, setUser] = useState("")

  useEffect(() => {
    let token = localStorage.token;
    if (!token) {
      console.log("Token not found");
      navigate("/Textin");
      return;
    }
    axios.get(url, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        if (!response.data.status) {
          console.log("wrong token");
          navigate("/login")
        }
        else {
          console.log("welcome");
          setUser(response.data.result.email)
          console.log(response.data.result.email);
        }
      })
      .catch((error) => {
        console.log(error);
        navigate("/login");
      });
  }, );

  return (
    <>
    <div> {user} </div>
    <h1>welcome dashboard</h1>

</>

  )
}

export default Dashboard;