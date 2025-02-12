import React from 'react'
import '../assets/css/LandingPage.css'

const LandingPage = () => {
  return (
    <div className="mainDiv">
      <img src="src\assets\image\landing\GreenShadowLogo.png" alt="" className='treeImage'/>
      <div className='green-div'></div>
      <div className="textDiv max-w-7xl mx-auto text-left">
        
        <h2 className="text-8xl font-bold text-white mb-6">
          Welcome to <br /> Green Shadow
        </h2>
        <p className="text-2xl text-green-500">
          Green Shadow is your trusted crop monitoring system, designed to help
          you efficiently manage your fields and crops. Track growth progress,
          analyze field data, and optimize your agricultural productivity all in
          one place.
        </p>
        <div className="mt-8 mb-6">
          <a
            href="/get-started"
            className="px-6 py-3 bg-green-700 text-white font-medium rounded-lg shadow hover:bg-green-800"
          >
            LogIn
          </a>
          <a
            href="/get-started"
            className="m-4 px-6 py-3 bg-green-700 text-white font-medium rounded-lg shadow hover:bg-green-800"
          >
            SignUp
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;