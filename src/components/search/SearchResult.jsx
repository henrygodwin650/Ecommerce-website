import { useSearchParams } from "react-router-dom";
import ProductData from "../Products/productData"
import Navbar from "../Navbar/Navbar";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const products = ProductData; // Use the imported product data
  const query = searchParams.get("q") || "";

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  const formatMoney = (cents) =>
    (cents / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">
          Search Results for "{query}"
        </h1>

        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 shadow"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover"
                />

                <h2 className="mt-2 font-semibold">
                  {product.name}
                </h2>

                <p className="text-green-600 font-bold">
                  {formatMoney(product.priceCents)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchResults;