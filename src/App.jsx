import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-gray-200 h-full p-4'>
    <Profile/>
    </div>
    </>// <Login/>
  )
}

export default App
