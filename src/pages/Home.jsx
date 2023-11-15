import { useState } from 'react'

const Home = () => {

  const [formData, setFormData] = useState({
    full: '',
    user: '',
    email: '',
    pass: '',
  });
  const [tableData, setTableData] = useState([]);

  const change = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    setTableData((prevTableData) => [...prevTableData, formData]);
    setFormData({
      full: '',
      user: '',
      email: '',
      pass: '',
    });
  };

  const deleteRow = (index) => {
    const updatedTableData = tableData.filter((_, i) => i !== index);
    setTableData(updatedTableData);
  };

  // const editRow = (index) => {
  //   const selectedRowData = tableData[index];
  //   setFormData(selectedRowData);
  //   setSelectedRowIndex(index);
  // };


  return (
    <div>
       <div className="fle min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 shadow-lg bg-yellow-500">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm shadow-lg">
          <img
            className="mx-auto h-10 w-auto shadow-lg"
            src="/src/assets/sqicollege.png"
            alt="Your Company"/>
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 shadow-lg">
            Sign Up Account!!!</h2>
        </div>

        <div className=" sm:mx-auto sm:w-full sm:max-w-sm space-y-3">
        <form className="space-y-3" action="#" method="POST">
          <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Full-Name
              </label>
              <div className="mt-2">
                <input id="full" className="form-control rounded-md"  value={formData.full}
            onChange={change}/>             
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input id="user" className="form-control rounded-md" value={formData.user}
            onChange={change}/>             
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input id="email" className="form-control rounded-md"  value={formData.email}
            onChange={change}/>             
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input id="pass" className="form-control rounded-md"  value={formData.pass}
            onChange={change}/>             
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"  onClick={submit}>
                Sign Up
              </button>
            </div>
            </form>

          <p> <a href="#" className="text-center text-sm text-gray-500 ms-3">
            Already a member?{' '} </a>
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ms-5">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>

      <table className="table table-bordered table-striped mt-1">
            <thead>
                <tr className='text-center'>
                    <th>ID</th>
                    <th>FULL~NAME</th>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                    <th>PASSWORD</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody className="">
              {tableData.map((data, index) => (
                <tr key={index} className="text-center">
                  <td>{index + 1}</td>
                  <td>{data.full}</td>
                  <td>{data.user}</td>
                  <td>{data.email}</td>
                  <td>{data.pass}</td>
                  <button
                  className="btn btn-secondary"
                  // onClick={() => editRow(index)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger ms-3"
                  onClick={() => deleteRow(index)}
                >
                  Delete
                </button>
                </tr>
              ))}
            </tbody>
        </table>
    </div>

    
    
  )
}

export default Home;