// import React from 'react'
import axios from 'axios'

const Test = () => {
    let url = "http://localhost:3500/user/register"
    const clickme = () => {
        axios.post(url, {Message: 'Hello From the Frontend'})
    };
    
    return (
        <div>
            <button className="rounded-lg border bg-grey-400 text-white p-4" onClick={clickme}>Click me</button>
        </div>
    );
};

export default Test