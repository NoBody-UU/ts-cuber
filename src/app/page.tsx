"use client";
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  // Todo: Remove this console.log
  console.log(session);

  return (
     <div className=" min-h-screen flex flex-col justify-center items-center p-24">
      <main className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <h1 className="text-4xl font-bold text-yellow-500 mb-4">
      Hello Cubers,{' '}      
      <span className="underline">
        <span className="text-blue-500">TS <span className="text-red-500">Cuber</span></span>
      </span>
      <span className="text-green-600"> IS BORN...</span>
    </h1>
      </main>

      <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full mt-8 relative z-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome to TS CUBER
        </h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at odio
          id orci tincidunt hendrerit vel nec lectus.
        </p>
        { !session?.user ? (
          <button
          className="relative px-5 py-3 overflow-hidden font-medium text-red-600 bg-yellow-400 border border-yellow-500 rounded-lg shadow-inner group"
          onClick={() => {
            signIn()
          }}
        >
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-700 group-hover:w-full ease"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-700 group-hover:w-full ease"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-700 group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-700 group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-red-600 opacity-0 group-hover:opacity-100"></span>
          <span className="relative transition-colors duration-300 delay-200 group-hover:text-yellow-400 ease">Comenzar</span>
        </button>
        ) : (
    
          <><div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  src={session.user.image!}
                  alt="Avatar"
                  width={40}
                  height={40}
                  className="rounded-full"></Image>
                <p className="ml-4 text-gray-800">{session.user.name}</p>
              </div>
            </div>
            <button
              className="relative px-5 py-3 overflow-hidden font-medium text-red-600 bg-yellow-400 border border-yellow-500 rounded-lg shadow-inner group"
              onClick={() => {
                signOut();
              } }
            >
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-700 group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-700 group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-700 group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-700 group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-red-600 opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-yellow-400 ease">Salir</span>
              </button></>
        )}

        
      </div>
    </div>
  );
}
