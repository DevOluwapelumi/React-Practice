import { useFormik } from "formik";
import * as Yup from "yup"

const Formik = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      },
      validationSchema: Yup.object({
          firstName: Yup.string().max(15, 'Must be 15 characters or Less')
              .required('Required'),
              lastName: Yup.string().max(20, 'Must be 20 characters or Less')
              .required('Required'),
              email: Yup.string().email('Invalid email address')
              .required('Required'),
              password: Yup.string().min(5, 'Must be 15 characters or Less')
              .required('Required'),
      }),
      onSubmit:values=>{
        console.log(values);
      }
  });
//   console.log(formik);
  return (
    <div>
      <div className="flex items-center justify-center flex-col">
        <form
          onSubmit={formik.handleSubmit}
                  className="flex items-center justify-center flex-col my-7">
                 <div>{formik.errors.firstName}</div> 
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            className="border rounded-md p-3 my-3 form-control"
            required
                  />
                  <div>{formik.errors.lastName}</div>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className="border rounded-md p-3 my-3 form-control"
            required
                  />
                  <div>{formik.errors.email}</div>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="border rounded-md p-3 my-3 form-control"
            required
                  />
                  <div>{formik.errors.password}</div>
          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="border rounded-md p-3 my-3 form-control"
            required
          />
          <button
            type="submit"
            className="bg-blue-400 rounded-lg text-white p-4 my-3 w-60"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formik;
