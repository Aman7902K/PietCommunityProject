import React from 'react'
import useNavigate from "react-router-dom"

function Login() {
    const navigate = useNavigate()
  return (
      <div className='mt-18 bg-white w-[100%] h-[100vh] flex justify-center'>
        <div className='"relative z-10 max-w-3xl px-10 py-2 mt-4 backdrop-blur-lg bg-[#fffbeo] border h-[70%] border-white/20 rounded-2xl shadow-2xl'>
        <h2 className='w-[100%] text-center mt-2'>Welcome Back</h2>
        <form action="#" className='w-[100%] p-4 flex flex-col gap-3'>
          <label htmlFor="email">Email Address</label>
          <input type="email" className='border-1 rounded p-1 ' name="email" id="email" placeholder='example@gmail.com' />
          <label htmlFor="pswd">Password</label>
          <input type="password" className='border-1 rounded p-1  ' name="pswd" id="pswd" placeholder='Enter Password' />
            <div className='text-end'>Forgot Password ?</div>
            <div >
                <input className='mr-3' type="radio" name="remme" id="remme" />
                <label htmlFor="remme">Remember Me</label>
            </div>
          <button className='border-1 rounded-2xl bg-[] w-[80%] mx-auto p-1'>Login</button>
          <p className='w-[100%] text-center'>Didn't have an Account ? <span className='text-blue-600 hover:cursor-pointer' navigate="/Signup">Sign Up Here</span> </p>
        </form>
        </div>
      </div>
  )
}

export default Login
