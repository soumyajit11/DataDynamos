import React from 'react'
import { useForm } from "react-hook-form"
import { useState } from 'react'
import './Login.css'

const Login = () => {
  const { register, handleSubmit, watch, setError, formState: { errors, isSubmitting } } = useForm();

  const resolveConfig = () => {
    // Your logic to resolve the configuration
    console.log("Configuration resolved!");
  };

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolveConfig();
        resolve();
      }, d * 1000);
    })

  }

  const onSubmit = async (data) => {
    await delay(4)

  }
  console.log(watch("example"));
  return (
    <>
      <div className='h-screen flex flex-wrap flex-col justify-center content-center'>
        {isSubmitting && <div>Loading...</div>}
        <div className="container flex justify-center content-center">
          <form className='h-20%' action="" onSubmit={handleSubmit(onSubmit)}>
            <input className='border-2 border-black' placeholder='username' {...register("username", { required: { value: true, message: "this field is required" }, minLength: { value: 3, message: "minimum length must be 3" }, maxLength: { value: 8, message: "maximum length must be 8" } })} type="text" />
            {errors.username && <div className='red'>{errors.username.message}</div>}
            <br />
            <input className='border-2 border-black' placeholder='password' {...register("password", { required: { value: true, message: "this field is required" }, minLength: { value: 7, message: "minimum length must be 7" } })} type="password" />
            {errors.password && <div className='red'>{errors.password.message}</div>}
            <br />
            <input className='border-2 border-black' disabled={isSubmitting} type="submit" value="submit" />
            {errors.myform && <div className='red'>{errors.myform.message}</div>}
            {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
          </form>
        </div>
      </div>


    </>
  )
}

export default Login







