import { navLinks } from '../Constants/Index';
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux' 
import { useEffect } from 'react';

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  

  useEffect(()=>{

  })

  return (
    <header className='padding-x py-2 bg-white fixed top-0 left-0 z-50 w-full shadow-xl'>
      <nav className='flex justify-between items-center max-container'>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label} className="relative">
              <Link 
                to={item.link} 
                className={`font-montserrat leading-normal text-lg rounded-lg font-bold block px-3 py-2 
                  ${currentPath === item.link ? 'bg-blue-600 text-white' : 'hover:bg-blue-600 hover:text-white'} 
                  transition-all duration-200`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
