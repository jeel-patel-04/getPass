import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className=" flex justify-between items-center px-4 h-14 container  mx-auto  max-w-5xl py-5">
        <div className="logo font-bold text-2xl">
          <span className="text-green-600">&lt; </span>
          get
          <span className="text-green-600">Pass / &gt; </span>
          
          </div>
      <ul>
        <li className="flex gap-4">
          <a className="hover:font-bold" href="/">Home</a>
          <a className="hover:font-bold" href="/">About</a>
          <a className="hover:font-bold" href="/">Contact</a>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
