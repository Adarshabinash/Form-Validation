import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function ValidatedForm() {
  const schema = yup.object().shape({
    firstName: yup.string().required("Must have a first name"),
    lastname: yup.string().required("Must have a last name"),
    email: yup.string().email().required("Must have a valid email"),
    age: yup.number().min(10).max(100).required().integer().positive(),
    password: yup
      .string()
      .min(8, "must be of 8 characters")
      .max(14)
      .required("Must have a password"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords don't match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  let onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1> Hello folks..please proceed with this form</h1>
      <div className="myForms">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="firstName"
            {...register("firstName")}
          />{" "}
          <br />
          <p>{errors.firstName?.message}</p> <br />
          <input
            type="text"
            placeholder="lastname"
            {...register("lastname")}
          />{" "}
          <br />
          <p>{errors.lastname?.message}</p> <br />
          <input type="text" placeholder="email" {...register("email")} />{" "}
          <br />
          <p>{errors.email?.message}</p> <br />
          <input type="number" placeholder="age" {...register("age")} /> <br />
          <p>{errors.age?.message}</p> <br />
          <input
            type="password"
            placeholder="password"
            {...register("password")}
          />{" "}
          <br />
          <p>{errors.password?.message}</p> <br />
          <input
            type="password"
            placeholder="confirmPassword"
            {...register("confirmPassword")}
          />{" "}
          <br />
          <p>{errors.confirmPassword?.message}</p> <br />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default ValidatedForm;
