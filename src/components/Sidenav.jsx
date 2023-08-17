import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail, AiOutlineUser, AiOutlineProfile } from 'react-icons/ai';
import './App.css';
const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div style={{ position: 'relative', zIndex: 99 }}>
      <AiOutlineMenu
        onClick={handleNav}
        className='absolute top-0 right-90% z-[99] md:hidden'
      />
      {nav ? (
        <div className='fixed top-0 right-0 w-[90%] h-screen bg-white/90 flex flex-col justify-center items-center z-[20]'>
          <a href="#main" className="w-[50%] mx-auto mt-5 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-100 p-4 cursor-pointer hover:scale-110 ease-in duration-200 border border-black">
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a href="#about" className="w-[50%] mx-auto mt-5 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-100 p-4 cursor-pointer hover:scale-110 ease-in duration-200 border border-black">
            <AiOutlineProfile size={20} />
            <span className="pl-4">Destinations:</span>
          </a>
          <a href="#project" className="w-[50%] mx-auto mt-5 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-100 p-4 cursor-pointer hover:scale-110 ease-in duration-200 border border-black">
            <AiOutlineProject size={20} />
            <span className="pl-4">Transportation</span>
          </a>
          <a href="#resume" className="w-[50%] mx-auto mt-5 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-100 p-4 cursor-pointer hover:scale-110 ease-in duration-200 border border-black">
            <AiOutlineUser size={20} />
            <span className="pl-4">Accommodations</span>
          </a>
          <a href="#contact" className="w-[50%] mx-auto mt-5 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-100 p-4 cursor-pointer hover:scale-110 ease-in duration-200 border border-black">
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact Us</span>
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default Sidenav;
