import React from 'react'
import '../assets/css/LandingPage.css'

const LandingPage = () => {
  return (
    <div className="mainDiv">
      <div className="textDiv max-w-7xl mx-auto text-center">
        <img src="src\assets\image\landing\treeImage.png" alt="" className=''/>
        <h2 className="text-8xl font-semibold text-white mb-6">
          Welcome to Green Shadow
        </h2>
        <p className="text-lg text-green-500">
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