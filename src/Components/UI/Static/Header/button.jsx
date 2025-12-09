export default function Button() {
  return (
    <button className="font-semibold flex gap-1 items-center justify-center text-md bg-blue-600 hover:bg-blue-700 text-white px-[12px] py-[10px] rounded-2xl transition-all">
      <span>+</span> <span>Add New Product</span>
    </button>
  );
}
