import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { loginUser } from '../redux/userSlice'; // adjust path as per your project
import { useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock name for now (or collect it in form)
    const name = 'John Doe';

    dispatch(loginUser({ email, name }));
    navigate('/dashboard'); // redirect after login
  };

  return (
    <div className='mt-18 bg-white w-[100%] h-[100vh] flex justify-center'>
      <div className='relative z-10 max-w-3xl px-10 py-2 mt-4 backdrop-blur-lg bg-[#fffbe0] border h-[70%] border-white/20 rounded-2xl shadow-2xl'>
        <h2 className='w-[100%] text-center mt-2'>Welcome Back</h2>
        <form onSubmit={handleLogin} className='w-[100%] p-4 flex flex-col gap-3'>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            className='border rounded p-1'
            name="email"
            id="email"
            placeholder='example@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="pswd">Password</label>
          <input
            type="password"
            className='border rounded p-1'
            name="pswd"
            id="pswd"
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='text-end'>Forgot Password?</div>
          <div>
            <input className='mr-3' type="radio" name="remme" id="remme" />
            <label htmlFor="remme">Remember Me</label>
          </div>
          <button type="submit" className='border rounded-2xl bg-blue-500 text-white w-[80%] mx-auto p-1'>
            Login
          </button>
          <p className='w-[100%] text-center'>
            Don't have an account? <span className='text-blue-600 hover:cursor-pointer' onClick={() => navigate("/Signup")}>Sign Up Here</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
