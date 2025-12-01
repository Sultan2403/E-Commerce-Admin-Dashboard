// Component displayed when an error occurs while fetching products
export default function ErrMsg() {
  return (
    <div className="w-[80%] mx-auto p-10 bg-slate-300 h-screen flex items-center justify-center">
      <p className="text-center text-red-600">Failed to load products.</p>
    </div>
  );
}
