import React from "react";
import Image1 from "../../assets/category/smartwatch2-removebg-preview.png";
import Image2 from "../../assets/products/men-athletic-shoes-white.jpg";
import Image3 from "../../assets/products/men-navigator-sunglasses-black.jpg";
import Image4 from "../../assets/category/gaming.png";
import { Link } from 'react-router';

const categories = [
  {
    id: 1,
    title: "New Arrivals",
    subtitle: "Latest Products",
    image: Image1,
    bg: "bg-yellow-700",
    text: "text-white",
  },
  {
    id: 2,
    title: "Best Sellers",
    subtitle: "Top Rated Items",
    image: Image2,
    bg: "bg-gradient-to-br from-gray-100 to-gray-300",
    text: "text-black",
  },
  {
    id: 3,
    title: "Premium Quality",
    subtitle: "Trusted Products",
    image: Image3,
    bg: "bg-white dark:bg-gray-100",
    text: "text-black",
  },
  {
    id: 4,
    title: "30% OFF",
    subtitle: "Limited Time Sale",
    image: Image4,
    bg: "bg-red-900",
    text: "text-white",
  },
];

const Category = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold dark:text-white">
            Shop By Category
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Discover amazing products and exclusive deals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {categories.map((item) => (
            <div
              key={item.id}
              className={`${item.bg} ${item.text}
                relative overflow-hidden rounded-3xl shadow-lg
                hover:shadow-2xl transition-all duration-300
                hover:-translate-y-2 group min-h-[220px]
                flex items-center justify-between px-5`}
            >
              {/* Content */}
              <div className="z-10">
                <p className="text-sm opacity-80">
                  {item.subtitle}
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {item.title}
                </h3>

                <button className="mt-5 px-4 py-2 rounded-full bg-black text-white dark:bg-gray-800 hover:scale-105 transition">
                  Shop Now
                </button>
              </div>

              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Decorative Circle */}
              <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-white/20 rounded-full"></div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Category;