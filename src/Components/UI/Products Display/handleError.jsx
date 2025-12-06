import useProducts from "../../../Hooks/useProducts";

// Component displayed when an error occurs while fetching products
export default function ErrMsg({ onRetry }) {
  return (
    <div className="w-full mx-auto p-10 flex-col gap-2 bg-slate-300 h-screen flex items-center justify-center">
      <p className="text-center text-red-600">Failed to load products.</p>
      <button
        onClick={useProducts}
        className=" text-center rounded-[12px] p-2 bg-indigo-800 text-white"
      >
        Retry
      </button>
    </div>
  );
}
