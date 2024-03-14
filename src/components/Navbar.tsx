"use client";
import { useState } from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  const [showUserMenu, setShowUserMenu] = useState(false);
  console.log(session);

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  return (
    <nav className="bg-amber-400 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 ">
        <a href="/" className="bg-amber-500 rounded-2xl w-44 h-12 justify-center flex items-center space-x-3 rtl:space-x-reverse">
          <Image 
          src="/character.png" 
          className="rounded-full w-10 h-10" 
          alt="Logo" 
          height={400} 
          width={500} 
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-red-500">
            <span className="text-blue-500">TS</span> Cuber</span>
        </a>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {session?.user ? (
            <>
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
                onClick={toggleUserMenu}
              >
                <span className="sr-only">Open user menu</span>
                <Image
                  className="w-8 h-8 rounded-full"
                  src={session.user.image!}
                  alt="user photo"
                  width={500}
                  height={400}
                />
              </button>
              <div
                className={`absolute top-16 right-4 z-50 ${showUserMenu ? 'block' : 'hidden'}  text-base list-none bg-gray-800 divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-white dark:text-white">{session.user.name ?? "username"}</span>
                  {/* <span className="block text-sm text-green-600 truncate dark:text-gray-400">{session.user.email}</span> */}
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li className="px-2">
                    <button
                      className="block w-full px-10 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Dashboard
                    </button>
                  </li>
                  <li className="px-2">
                    <button
                      className="block w-full px-12 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Settings
                    </button>
                  </li>
                  <li className="px-2">
                    <button
                      type="button"
                      className="block w-full px-12 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      onClick={() => signOut({
                        callbackUrl: "/"
                      })}
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <button
              type="button"
              className="bg-blue-700 text-white px-3 py-2 rounded"
              onClick={() => signIn()}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
