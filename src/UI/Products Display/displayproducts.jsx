// Import necessary libraries and components

import ErrMsg from "./handleError";
import useProducts from "../../Hooks/useProducts";
import ProductsCard from "./productCard";
import LoadingMsg from "./loading";

// Main component that displays a grid of products fetched from the API
export default function DisplayProducts() {
  // State to store the list of products

  // Use the custom hook to fetch products
  const { products, error, loading } = useProducts();

  // Show loading state
  if (loading) return <LoadingMsg />;

  // Show error state
  if (error) return <ErrMsg />;

  // Display products in a responsive grid layout
  return (
    <main className="w-[80%] p-10 overflow-y-auto bg-slate-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {products.map((item) => (
          <ProductsCard item={item} key={item.id} />
        ))}
      </div>
    </main>
  );
}
