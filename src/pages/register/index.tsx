import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row w-full max-w-[900px] overflow-hidden">

        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign up</h2>

          <div className="mb-4">
            <label className="flex items-center border-b border-gray-400 py-2">
              <i className="fa-solid fa-user text-gray-500"></i>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full focus:outline-none"
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="flex items-center border-b border-gray-400 py-2">
              <i className="fa-solid fa-envelope text-gray-500"></i>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full focus:outline-none"
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="flex items-center border-b border-gray-400 py-2">
              <i className="fa-solid fa-lock text-gray-500"></i>
              <input
                type="password"
                placeholder="Password"
                className="w-full focus:outline-none"
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="flex items-center border-b border-gray-400 py-2">
              <i className="fa-solid fa-lock text-gray-500"></i>
              <input
                type="password"
                placeholder="Repeat your password"
                className="w-full focus:outline-none"
              />
            </label>
          </div>

          <div className="flex items-center text-sm mb-6">
            <input type="checkbox" className="mr-2" />
            <span>
              I agree all statements in
              <a className="text-blue-500 hover:underline">
                Terms of service
              </a>
            </span>
          </div>

          <button onClick={() => navigate("/login")} className="bg-sky-500 text-white w-full py-2 rounded hover:bg-sky-600">
            Register
          </button>

          <p
            onClick={() => navigate("/login")}
            className="text-sm text-blue-500 hover:underline text-center mt-4 cursor-pointer"
          >
            I am already member
          </p>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-white">
          <img src="https://png.pngtree.com/png-vector/20240427/ourmid/pngtree-a-woman-work-in-office-png-image_12329873.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
