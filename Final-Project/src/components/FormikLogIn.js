//Have not used formik into applications...

import { useFormik } from "formik";
import { LogInSchema } from "./schemas/LoginSchema";

const initialValues = {
  name: "",
  email: "",
};

const FormikLogIn = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: LogInSchema,
      onSubmit: (values, action) => {
        console.log(values);
        setlogin({
          username: values.name,
          email: values.email,
        });
        action.resetForm();
      },
    });
  return;
  <>
    <div className="h-[60vh] flex justify-center items-center bg-slate-300">
      <form onSubmit={handleSubmit} className="border border-gray-600 p-5">
        <div className="my-2">
          <input
            className=""
            type="text"
            name="name"
            placeholder="Firstname"
            values={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.name && touched.name ? <p>{errors.name}</p> : null}
        </div>
        <div className="my-2">
          <input
            className=""
            type="email"
            name="email"
            placeholder="Email"
            values={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.email && touched.email ? <p>{errors.email}</p> : null}
        </div>
        <div className="bg-yellow-400" type="submit">
          <Link to="/">
            <button type="submit">Submit</button>
          </Link>
        </div>
      </form>
    </div>
  </>;
};

export default FormikLogIn;
