import "./App.css";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [info, setInfo] = useState();

  function onSubmit(data) {
    reset();
    setInfo(data);
    console.log(data);
  }

  console.log(errors);

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Registration form(react-hook-form)</h2>
        <div>
          <label>Username</label>
          <br />
          <input
            {...register("username", {
              required: {
                value: true,
                message: "Username is required",
              },
              minLength: {
                value: 4,
                message: "Username must be a minimum of 4 characters",
              },
              maxLength: {
                value: 10,
                message: "Username cannot exceed  more than 10 characters",
              },
            })}
          />
        </div>
        <p className="para">
          {errors.username?.type === "minLength" && errors.username?.message}
          {errors.username?.type === "maxLength" && errors.username?.message}
          {errors.username?.type === "required" && errors.username?.message}
        </p>
        <div>
          <label>Password</label>
          <br />
          <input
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 5,
                message: "Password must be a minimum of 5 characters",
              },
              maxLength: {
                value: 10,
                message: "Password cannot exceed  more than 20 characters",
              },
            })}
            type="password"
          />
        </div>
        <p className="para">
          {errors.password?.type === "minLength" && errors.password?.message}
          {errors.password?.type === "maxLength" && errors.password?.message}
          {errors.password?.type === "required" && errors.password?.message}
        </p>
        <div>
          <label>Email</label>
          <br />
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },

              minLength: {
                value: 5,
                message: "Email must be a minimum of 5 characters",
              },
              maxLength: {
                value: 30,
                message: "Email cannot exceed  more than 30 characters",
              },
            })}
            type="email"
          />
        </div>
        <p className="para">
          {errors.email?.type === "minLength" && errors.email?.message}
          {errors.email?.type === "maxLength" && errors.email?.message}
          {errors.email?.type === "required" && errors.email?.message}
        </p>
        <br />
        <button className="btn">Submit</button>
      </form><br />
      <h2>Rendered data</h2>
      <h2>{<pre>{JSON.stringify(info, null, 2)}</pre>}</h2>
    </div>
  );
}
