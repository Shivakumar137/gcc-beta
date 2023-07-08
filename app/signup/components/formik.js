"use client";
import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="m-6 w-96">
      <label
        htmlFor={props.id || props.name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error text-red-700">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default function SignupForm() {
  return (
    <section className="flex flex-row justify-center justify-items-center">
      <Formik
        initialValues={{
          userId: "",
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          userId: Yup.string()
            .max(20, "Must be 20 characters or less")
            .min(4, "Must be 4 characters or more")
            .required("Required"),
          userName: Yup.string()
            .max(25, "Must be 25 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(5, "Must be of length 8 or more")
            .max(25, "Please keep it short don't waste resources on password")
            .required("Required"),
          confirmPassword: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert("successfully submitted");
            setSubmitting(false);
          }, 400);
        }}
        className="flex justify-center"
      >
        <Form>
          <MyTextInput
            label="User Id"
            name="userId"
            type="text"
            placeholder="you are an early user create a unique userid"
          />

          <MyTextInput
            label="User Name"
            name="userName"
            type="text"
            placeholder="Shiva Kumar"
          />

          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="abc@gmail.com"
          />

          <MyTextInput
            label="Password"
            name="password"
            type="text"
            placeholder="••••••••"
          />

          <MyTextInput
            label="Confirm Password"
            name="confirmPassword"
            type="text"
            placeholder="••••••••"
          />

          <button
            type="submit"
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Create an account
          </button>

          <p className="text-sm m-4 font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <a
              href="../login"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Login here
            </a>
          </p>
        </Form>
      </Formik>
    </section>
  );
}
