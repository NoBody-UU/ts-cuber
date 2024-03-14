"use client"
import React from 'react';
import { signOut } from 'next-auth/react';

const HomePage = () => {

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Welcome to Your Home Page!</h1>
        <p className="text-gray-600">This is your personalized home page content.</p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => signOut()}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomePage;
