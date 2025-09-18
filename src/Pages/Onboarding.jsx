import React from 'react';
import { asset } from '../Images/asset'; // assuming you have a logo here
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const navigate = useNavigate();



  return (
    <div className="min-h-screen grid grid-cols-2 relative">
      {/* Logo */}
      <div className="flex absolute top-5 left-13 items-center gap-1.5">
      <img 
        src={asset.logo} 
        alt="Logo" 
        className='h-9'
      />
      <img src={asset.logo3} alt=""
      className='h-11' />
      </div>

      {/* Left side - Black background */}
      <div className="bg-primary text-white flex items-center justify-center px-13">
         <p className="text-xl md:text-2xl font-semibold text-white">
          Easily discover, connect with, and book trusted local artisans for any service you need.
        </p>
      </div>

      {/* Right side - Blue background */}
      <div className="bg-gray-950 flex flex-col items-center justify-center p-13">
        <p className="text-xl md:text-2xl font-semibold text-white mb-8">Get Started</p>
        <div className="flex gap-4 w-full">
          <button
            onClick={() => navigate('/login')}
            className="w-full py-3 bg-secondary text-white text-[16px] rounded-lg transition"
          >
            Log In
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="w-full py-3  bg-secondary text-white text-[16px]  rounded-lg transition"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
