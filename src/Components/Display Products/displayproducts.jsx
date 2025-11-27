import { useEffect, useState } from "react";
import ItemStatus from "./stockIndicator";
import getProducts from "../Api/api.config";
import ErrMsg from "../Error Handling/handleError";
import capitalize from "../Typography/capitalizeFirstLetter";
import { Edit2, LucideEdit2, Trash2 } from "lucide-react";

export default function DisplayProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function awaitProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError(true);
      }
    }

    awaitProducts();
  }, []);

  if (error) return <ErrMsg />;
  return (
    <div className="w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10 bg-slate-300 justify-self-end">
      {products.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col hover:translate-y-[-15px] focus:translate-y-[-15px] transition-all duration-300 ease-out justify-center items-start p-5 bg-slate-100 border-2 border-slate-500 rounded-[25px]"
          >
            <div className="h-[90%] w-full">
              <img
                className="object-cover w-full h-52 rounded-xl"
                src={item.images[0]}
              />
            </div>

            <div className="flex items-center justify-between w-[95%] my-3  ">
              <h2 className="flex-1 text-xl font-bold line-clamp-2">
                {item.title}
              </h2>
              <span className="flex-shrink-0 border-2 border-slate-500 px-2 py-1 rounded-[10px] text-sm">
                {capitalize(item.category)}
              </span>
            </div>
            <div className="flex my-4 items-center justify-between w-[100%]">
              <span className="font-semibold text-2xl ">${item.price}</span>
              {<ItemStatus item={item} />}
            </div>
            <div>
              <p className="text-gray-500 font-medium">
                Stock: {item.stock} units
              </p>
            </div>
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
