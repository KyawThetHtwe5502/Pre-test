import React from 'react'
import logo from "../../../assets/logo.png"
import LoginForm from '../components/LoginForm'
const LoginPage = () => {
  return (
    <div className='flex justify-center items-center h-screen w-full'>
        <div className='min-w-md'>
            <div className='flex justify-center'>

            <img src={logo} className='size-20' alt="" />
            </div>
        <h1 className='text-2xl font-bold mb-4 text-center'>
            Delivery management platform
        </h1>
        <LoginForm/>
        </div>

    </div>
  )
}

export default LoginPage