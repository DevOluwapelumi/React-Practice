import { useState } from 'react'

const Event = () => {
  const [count, setCount] = useState(0);
//   const [users, setUsers] = useState("")
  const [Name, setName ] = useState("Oluwapelumi")

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    if (count > 0) {
        setCount(count -1)
    }
  };
  return (
    <>
     <h3 className="text-center text-black">Counter: {count}</h3>
    <h1 className="text-center text-black">Your Name: {Name}</h1>
    <div className="text-center d-flex ms-5 mt-5">
              <button onClick={Increment} className="btn btn-success rounded rounded-3">Increment</button>
        <button onClick={Decrement} className="btn btn-danger rounded rounded-3">Decrement</button>
        <input type="text" placeholder="Enter your Name" className="form-control" onChange={(event) => setName(event.target.value)} />
    </div>

    </>
  )
}

export default Event;