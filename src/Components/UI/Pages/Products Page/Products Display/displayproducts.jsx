// Import necessary libraries and components

import useProducts from "../../../../../Hooks/useProducts";
import ProductsCard from "./productCard";
import LoadingMsg from "./loading";

// Main component that displays a grid of products fetched from the API
export default function DisplayProducts() {
  // State to store the list of products

  // Use the custom hook to fetch products
  const { products, error, loading, awaitProducts } = useProducts();

  // Show loading state
  if (loading) return <LoadingMsg />;

  // Show error state
  if (error)
    return (
      <div className="w-full mx-auto p-10 flex-col gap-2 bg-slate-300 h-screen flex items-center justify-center">
        <p className="text-center text-red-600">Failed to load products.</p>
        <button
          onClick={awaitProducts}
          className=" text-center rounded-[12px] p-2 bg-indigo-800 text-white"
        >
          Retry
        </button>
      </div>
    );

  // Display products in a responsive grid layout
  return (
    <main className="w-full p-10 overflow-y-auto bg-slate-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {products.map((item) => (
          <ProductsCard item={item} key={item.id} />
        ))}
      </div>
    </main>
  );
}
