// Import necessary libraries and components

import ItemStatus from "./stockIndicator";
import ErrMsg from "../Error Handling/handleError";
import capitalize from "../../Utilities/Typography/capitalizeFirstLetter";
import { LucideEdit2, Trash2 } from "lucide-react";
import useProducts from "../../Hooks/useProducts";

// Main component that displays a grid of products fetched from the API
export default function DisplayProducts() {
  // State to store the list of products

  // Use the custom hook to fetch products
  const { products, error, loading } = useProducts();

  // Show loading state
  if (loading)
    return (
      <p className="text-center h-[100vh] flex items-center justify-center">
        Loading products...
      </p>
    );

  // Show error state
  if (error) return <ErrMsg />;

  // Display products in a responsive grid layout
  return (
    <div className="w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10 bg-slate-300 justify-self-end">
      {/* Map through products and render each as a card */}
      {products.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col hover:translate-y-[-15px] focus:translate-y-[-15px] transition-all duration-300 ease-out justify-center items-start p-5 bg-slate-100 border-2 border-slate-500 rounded-[25px]"
          >
            {/* Product image container */}

            <div className="h-[90%] w-full">
              <img
                className="object-cover w-full h-52 rounded-xl"
                src={item.images[0]}
              />
            </div>

            {/* Product title and category section */}

            <div className="flex items-center justify-between w-[95%] my-3  ">
              <h2 className="flex-1 text-xl font-bold line-clamp-2">
                {item.title}
              </h2>

              {/* Category badge */}
              <span className="flex-shrink-0 border-2 border-slate-500 px-2 py-1 rounded-[10px] text-sm">
                {capitalize(item.category)}
              </span>
            </div>

            {/* Price and stock status section */}

            <div className="flex my-4 items-center justify-between w-[100%]">
              <span className="font-semibold text-2xl ">${item.price}</span>
              {/* Stock indicator component */}
              {<ItemStatus item={item} />}
            </div>

            {/* Stock quantity display */}

            <div>
              <p className="text-gray-500 font-medium">
                Stock: {item.stock} units
              </p>
            </div>

            {/* Edit and Delete action buttons */}

            <div className="flex justify-between w-[100%] gap-2 items-center my-3">
              <button className="flex items-center gap-1 justify-center border-[1.5px] border-stone-500 rounded-lg py-1 px-2 flex-1 text-black font-semibold">
                {<LucideEdit2 size={16} />} Edit
              </button>
              <button className="flex items-center gap-1 justify-center border-[1.5px] border-stone-500 rounded-lg py-1 px-2 flex-1 text-red-700 font-semibold">
                {<Trash2 size={16} />} Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
