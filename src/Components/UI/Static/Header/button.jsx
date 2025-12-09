export default function Button() {
  return (
    <button className="font-semibold flex gap-1 items-center justify-center text-md bg-blue-600 hover:bg-blue-700 text-white p-2 px-3 rounded-2xl shadow-lg transition-all">
      <span>+</span> <span>Add new products</span>
    </button>
  );
}
