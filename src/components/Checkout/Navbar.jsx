import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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

const Navbar = ({ cartCount = 0, Products }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  const formatMoney = (cents) =>
    (cents / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const searchRef = useRef(null);

  const handleSearch = (value) => {
    setSearchTerm(value);

    if (!value.trim()) {
      setResults([]);
      setShowResults(false);
      return;
    }

    const filtered = Products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filtered);
    setShowResults(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) return;

    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);

    setShowResults(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            <div className="hidden md:block flex-1 max-w-md mx-6">
              <div className="relative" ref={searchRef}>

                {/* Search Form */}
                <form onSubmit={handleSubmit}>
                  <IoMdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />

                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search products..."
                    className="w-full pl-12 pr-24 py-2.5 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 dark:text-white"
                  />

                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-600 text-white px-4 py-1.5 rounded-full"
                  >
                    Search
                  </button>
                </form>

                {/* 👇 SEARCH DROPDOWN GOES HERE */}
                {showResults && (
                  <div className="absolute left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl max-h-80 overflow-y-auto z-50">

                    {results.length === 0 ? (
                      <div className="p-4 text-center text-gray-500">
                        No products found
                      </div>
                    ) : (
                      results.slice(0, 6).map((product) => (
                        <Link
                          key={product.id}
                          to={`/product/${product.id}`}
                          onClick={() => setShowResults(false)}
                          className="flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-14 h-14 rounded object-cover"
                          />

                          <div>
                            <p className="font-semibold">{product.name}</p>
                            <p className="text-green-600 font-bold">
                              {formatMoney(product.priceCents)}
                            </p>
                          </div>
                        </Link>
                      ))
                    )}

                  </div>
                )}

              </div>
            </div>
          </div>

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

        {/* Mobile Search */}
        <div className="md:hidden py-3">
          <div className="relative" ref={searchRef}>

            {/* Search Form */}
            <form onSubmit={handleSubmit}>
              <IoMdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-12 pr-24 py-2.5 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 dark:text-white"
              />

              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-600 text-white px-4 py-1.5 rounded-full"
              >
                Search
              </button>
            </form>

            {/* 👇 SEARCH DROPDOWN GOES HERE */}
            {showResults && (
              <div className="absolute left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl max-h-80 overflow-y-auto z-50">

                {results.length === 0 ? (
                  <div className="p-4 text-center text-gray-500">
                    No products found
                  </div>
                ) : (
                  results.slice(0, 6).map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      onClick={() => setShowResults(false)}
                      className="flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-14 h-14 rounded object-cover"
                      />

                      <div>
                        <p className="font-semibold">{product.name}</p>
                        <p className="text-green-600 font-bold">
                          {formatMoney(product.priceCents)}
                        </p>
                      </div>
                    </Link>
                  ))
                )}

              </div>
            )}

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