import React, { useState } from 'react';
import DarkMode from '../DarkMode/DarkMode';
import { BiUser, BiHeart } from 'react-icons/bi';
import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const MenuLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Blogs", link: "/blogs" },
  { id: 3, name: "New Arrivals", link: "/tracking" },
  { id: 4, name: "Sales", link: "/checkout" },
  { id: 5, name: "Contact", link: "/contact" },
];

const Navbar = ({ cartCount = 0 }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="container mx-auto px-4">

        {/* Main Navbar */}
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <h1 className="text-2xl font-bold font-mono uppercase text-black dark:text-white">
            Ice-Shops
          </h1>

          {/* Search */}
          <div className="hidden md:block flex-1 max-w-md mx-6">
            <div className="relative">
              <IoMdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-12 pr-4 py-2.5 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 dark:text-white focus:outline-none focus:border-green-500"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-8">

            {MenuLinks.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 transition"
              >
                {item.name}
              </a>
            ))}

            <button className="relative">
              <a href="/checkout">
                <FaCartShopping className="text-2xl text-gray-700 dark:text-white hover:text-green-600" />
              </a>

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <DarkMode />
          </div>

          {/* Mobile Right Section */}
          <div className="flex sm:hidden items-center gap-4">

            <button className="relative">
              <a href="/checkout">
                <FaCartShopping className="text-2xl text-gray-700 dark:text-white" />
              </a>

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <DarkMode />

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="text-3xl text-gray-700 dark:text-white"
            >
              {mobileMenu ? <MdClose /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden py-3">
          <div className="relative">
            <IoMdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-2.5 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 dark:text-white"
            />
          </div>
        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileMenu ? "max-h-96" : "max-h-0"
          }`}
      >
        <div className="bg-white dark:bg-gray-900 border-t dark:border-gray-700">

          {MenuLinks.map((item) => (
            <a
              key={item.id}
              href={item.link}
              onClick={() => setMobileMenu(false)}
              className="block px-6 py-4 border-b border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              {item.name}
            </a>
          ))}

          <div className="flex justify-center gap-8 py-5">

            <a href="/" className="text-2xl text-gray-700 dark:text-white">
              <FiHome />
            </a>

            <a href="/blogs" className="text-2xl text-gray-700 dark:text-white">
              <BiHeart />
            </a>

            <a href="/contact" className="text-2xl text-gray-700 dark:text-white">
              <BiUser />
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;