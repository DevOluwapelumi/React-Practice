import { useState, } from 'react'
import axios from 'axios';

const Fetch = () => {
    const [data, setdata] = useState([])
    // let endpoint = "http://jsonplaceholder.typicode.com/users"
    // let endpoint2 = "http://catfact.ninja/fact"
    // let endpoint3 = "http://api.agify.io/?name"
    let endpoint4 = "http://api.github.com/users"
    const fetchData = () => {
        // axios.get(endpoint).then((res) => {
        //     console.log(res.data);
        //     setdata(res.data);
        // })

        // axios.get(endpoint2).then((res) => {
        //     console.log(res.data);
        //     setdata(res.data.fact);
        // })
        
            axios.get(endpoint4)
              .then((response) => {
                setdata(response.data);
              })

        

    };
    return (
      <div>
            <button className="btn btn-danger" onClick={fetchData}>Fetch Data</button>
            <ul>
        {data.map((user, index) => (
            <li key={index}>
                <div className="col-sm-12 col-md-4 mx-5 shadow p-5 text-center" style={{width:"300px"}}>
            <p>Avatar URL: <img src={user.avatar_url} alt="" style={{width:"300px", borderRadius: "50%"}}/></p>
            <p>Login: {user.login}</p>
                    <p>Profile URL: {user.html_url}</p>
                    </div>
          </li>
        ))}
      </ul>
            


          {/* { data.map((item, index) => (
                <div className="flex items-center justify-between mx-96">
                      <h1>{item.name}</h1>
                      </div>
              ))} */}
          
          {/* <p>{data.fact}</p>
          <small>{data.length}</small> */}

          {/* <div className='flex flex-col w-80 mx-auto'>
              <input type="text" className='rounded outline-none border p-2 my-3' onChange={(e) => setName(e.target.value)} />
              <button></button>
          </div> */}
    </div>
  )
}

export default Fetch;