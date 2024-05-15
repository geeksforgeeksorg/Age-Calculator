import React from "react";
import logo from "./images/year.png"

let Navbar = () => {
    return (

        <nav className="bg-[#211f39] border border-r-0 border-t-0 border-l-0 border-b-gray-600  dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-8" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white font-Russo tracking-widest">AgeSphere</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button className="relative outline outline-2 outline-[#FEBF00] border border-2 rounded rounded-xl border-black duration-500 group cursor-pointer text-sky-50  overflow-hidden h-12 w-48 rounded-md bg-red-800 p-2 flex justify-center items-center font-extrabold">
                        <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-900 delay-150 group-hover:delay-75"></div>
                        <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-800 delay-150 group-hover:delay-100"></div>
                        <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-700 delay-150 group-hover:delay-150"></div>
                        <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-600 delay-150 group-hover:delay-200"></div>
                        <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-500 delay-150 group-hover:delay-300"></div>
                        <p className="font-Russo tracking-widest text-lg z-10">Get Started</p>
                    </button>
                    <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 px-3 md:p-0 text-white rounded bg-transparent font-Russo tracking-widest" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 md:p-0 text-white rounded bg-transparent font-Russo tracking-widest">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 md:p-0 text-white rounded bg-transparent font-Russo tracking-widest">Services</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 md:p-0 text-white rounded bg-transparent font-Russo tracking-widest">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;