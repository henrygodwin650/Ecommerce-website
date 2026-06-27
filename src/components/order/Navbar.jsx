import React, { useState } from "react";
import { Link } from "react-router-dom";
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

const Navbar = ({ cartCount = 0}) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  // const navigate = useNavigate();

  // const formatMoney = (cents) =>
  //   (cents / 100).toLocaleString("en-US", {
  //     style: "currency",
  //     currency: "USD",
  //   });

  // const [searchTerm, setSearchTerm] = useState("");
  // const [results, setResults] = useState([]);
  // const [showResults, setShowResults] = useState(false);

return (
  <nav className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
    <div className="container mx-auto px-4">

      {/* Main Navbar */}
      <div className="flex items-center justify-between h-16">

        {/* Logo */}
        <h1 className="text-2xl font-bold font-mono uppercase text-black dark:text-white">
          Ice-Shops
        </h1>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8">

          {MenuLinks.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 transition"
            >
              {item.name}
            </Link>
          ))}

          <button className="relative">
            <Link to="/checkout">
              <FaCartShopping className="text-2xl text-gray-700 dark:text-white hover:text-green-600" />
            </Link>

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
            <Link to="/checkout">
              <FaCartShopping className="text-2xl text-gray-700 dark:text-white" />
            </Link>

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
    </div>

    {/* Mobile Menu */}
    <div
      className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileMenu ? "max-h-96" : "max-h-0"
        }`}
    >
      <div className="bg-white dark:bg-gray-900 border-t dark:border-gray-700">

        {MenuLinks.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            onClick={() => setMobileMenu(false)}
            className="block px-6 py-4 border-b border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            {item.name}
          </Link>
        ))}

        <div className="flex justify-center gap-8 py-5">

          <Link to="/" className="text-2xl text-gray-700 dark:text-white">
            <FiHome />
          </Link>

          <Link to="/blogs" className="text-2xl text-gray-700 dark:text-white">
            <BiHeart />
          </Link>

          <Link to="/contact" className="text-2xl text-gray-700 dark:text-white">
            <BiUser />
          </Link>

        </div>
      </div>
    </div>
  </nav>
);
};

export default Navbar;