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
        className="block mb-2 text-sm font-medium text-white"
      >
        {label}
      </label>
      <input
        className="border bg-pureblack rounded-lg block w-full p-2.5 hover:border-fuchsia-50"
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
    <section className="flex flex-row justify-center m-16">
      <div className="flex items-center mr-36 mb-16 text-2xl font-semibold text-white">
        Sign Up to unlock more features
      </div>
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
            .min(8, "Must be of length 8 or more")
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
            type="password"
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
            className="w-full text-white font-medium rounded-lg text-sm px-4 py-2.5 text-center bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-cyan-500 hover:to-violet-500"
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
