import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";

export const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="w-full flex flex-col text-center items-center">
      <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
        Create Product 🚀
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-10 my-10">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {products.length === 0 && (
        <p className="flex text-center font-bold items-center dark:text-gray-400 py-10">
          No product found 😢
          <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text pl-2 underline decoration-2 hover:decoration-cyan-400">
            <Link to={"/create"}>Create Product</Link>
          </p>
        </p>
      )}
    </div>
  );
};
