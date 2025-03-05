import React from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // Function to toggle mobile drawer
  const toggleMobileDrawer = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <div>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
              <span className="text-xl tracking-tight">Echo S</span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="!text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a className="py-2 px-3 border border-white rounded-md " href="#">
                <span className="text-white">Sign In</span>
              </a>
              <a
                className="bg-gradient-to-r from-purple-400 to-purple-900 py-2 px-3 rounded-md  "
                href="#"
              >
                <span className="text-white">Create an Account</span>
              </a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleMobileDrawer}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden ">
              <ul>
                {navItems.map((items, index) => (
                  <li key={index} className="py-3">
                    <a href={items.href} className="!text-white">
                      {items.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6">
                <a
                  className="py-2 px-3 border border-white rounded-md "
                  href="#"
                >
                  Sign In
                </a>
                <a
                  className="py-2 px-3 rounded-md bg-gradient-to-r from-purple-400 to-purple-950"
                  href="#"
                >
                  Create an Account
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
