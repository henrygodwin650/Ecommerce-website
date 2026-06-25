import React from 'react';
import Image1 from '../../assets/category/watch.png';
import Image2 from '../../assets/hero/headphone.png';
import Image3 from '../../assets/category/macbook.png';
import Image4 from '../../assets/products/knit-athletic-sneakers-gray.jpg';
import { Link } from 'react-router';


const Trending = () => {
  const trendData = [
    {
      id: 'Id1',
      name: 'Smartwatch',
      subtitle: 'Stay connected with advanced health tracking',
      image: Image1,
      bgColor: '#1376f4',
    },
    {
      id: 'Id2',
      name: 'Headphone',
      subtitle: 'Premium sound with all-day comfort',
      image: Image2,
      bgColor: '#2dcc6f',
    },
    {
      id: 'Id3',
      name: 'Laptops',
      subtitle: 'Powerful performance meets sleek design',
      image: Image3,
      bgColor: '#fdc62e',
    },
    {
      id: 'Id4',
      name: 'Sneakers',
      subtitle: 'Ultra-comfortable fit with premium cushioning',
      image: Image4,
      bgColor: '#101828',
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-900">
          Trending Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trendData.map((data) => (
            <div
              key={data.id}
              className="group relative overflow-hidden rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl"
              style={{ backgroundColor: data.bgColor }}
            >
              {/* Rotating Image Container */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mb-6 transition-transform duration-700 group-hover:rotate-12">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="text-white w-full">
                <h3 className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent text-2xl sm:text-3xl font-bold mb-2 tracking-tight">
                  {data.name}
                </h3>
                <p className="text-white/90 text-base sm:text-lg">
                  {data.subtitle}
                </p>
              </div>

              {/* Hover Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;