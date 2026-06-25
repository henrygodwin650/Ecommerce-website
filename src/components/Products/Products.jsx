// Products.jsx
import React, { useState } from "react";
import ProductData from './productData';
import { useCart } from '../Checkout/CartContext';
import { Link } from 'react-router';

const Products = () => {
  const { addToCart } = useCart();
  const [selectedVariation, setSelectedVariation] = useState({});
  const [addedToCart, setAddedToCart] = useState({});

  const formatMoney = (cents) =>
    (cents / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  const handleAddToCart = (product) => {
    const qtyInput = document.getElementById(`qty-${product.id}`);
    const quantity = qtyInput ? parseInt(qtyInput.value) || 1 : 1;

    const selected = selectedVariation[product.id];

    const cartItem = {
      productId: product.id,
      name: selected?.name || product.name,
      image: selected?.image || product.image,
      priceCents: selected?.priceCents || product.priceCents,
      quantity: quantity,
    };

    addToCart(cartItem);

    setAddedToCart(prev => ({ ...prev, [product.id]: true }));

    setTimeout(() => {
      setAddedToCart(prev => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  const buildVariation = (product, variation) => ({
    ...variation,
    name: `${product.name} - ${variation.color
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
      }`,
  });

  return (
    <div className="
  container
  mx-auto
  px-3
  py-8
  grid
  grid-cols-2
  xs:grid-cols-2
  sm:grid-cols-3
  md:grid-cols-3
  lg:grid-cols-4
  xl:grid-cols-5
  gap-4
">
      {ProductData.map(product => {
        const selected = selectedVariation[product.id];

        return (
          <div
            key={product.id}
            className="
            bg-white
            dark:bg-gray-900
              border
            border-gray-200
            dark:border-gray-700
              rounded-2xl
              overflow-hidden
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
              flex
              flex-col
          "
          >

            <div className="">
              <img
                src={selected?.image || product.image}
                alt={selected?.name || product.name}
                className=" w-full h-32 sm:h-40 md:h-48 object-cotain transition-transform duration-300 hover:scale-105"
              />
            </div>

            <p className="font-semibold ps-1 line-clamp-2">{selected?.name || product.name}</p>
            <div className="flex items-center px-3 mt-2 gap-2">
              <img
                className="w-16 sm:w-20"
                src={`images/ratings/rating-${product.rating.stars * 10}.png`}
                alt="rating"
              />

              <span className="text-xs sm:text-sm text-gray-500">
                ({product.rating.count})
              </span>
            </div>

            {/* Variations */}
            {product.variations && product.variations.length > 0 && (
              <div className="flex gap-2 ps-2 mt-2">
                {product.variations.map((v, i) => (
                  <img
                    key={i}
                    src={v.image}
                    onClick={() =>
                      setSelectedVariation(prev => ({
                        ...prev,
                        [product.id]: buildVariation(product, v)
                      }))
                    }
                    className={`
  w-7 h-7
  sm:w-9 sm:h-9
  rounded-full
  cursor-pointer
  border-2
  transition-all
  duration-200
  ${selected?.image === v.image
                        ? "border-green-600 scale-110"
                        : "border-gray-300 hover:border-green-500"
                      }
                        `}
                  />
                ))}
              </div>
            )}

            <div className="flex items-center gap-3 mt-4">
              <p className="text-green-600 font-bold ps-1 text-lg mt-2">
                {formatMoney(selected?.priceCents || product.priceCents)}
              </p>

              <input
                id={`qty-${product.id}`}
                type="number"
                min="1"
                defaultValue="1"
                className="w-10 ps-[2px] text-center border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:border-green-500"
              />
            </div>

            <button
              onClick={() => handleAddToCart(product)}
              className="mt-2 mb-1 bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded-2xl font-semibold transition active:scale-95"
            >
              {addedToCart[product.id] ? "✓ Added to Cart" : "Add to Cart"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;