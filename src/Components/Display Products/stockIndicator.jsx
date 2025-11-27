export default function ItemStatus({ item }) {
  return item.stock > 1 ? (
    <span className="bg-black text-slate-200 py-1 px-2 rounded-[72px] ">
      In Stock
    </span>
  ) : (
    <span className="bg-red text-slate-200 py-1 px-2 rounded-[72px] ">
      Out of stock
    </span>
  );
}
