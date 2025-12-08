// Component that displays stock status based on item availability
// Shows "In Stock" badge if stock > 1, otherwise shows "Out of stock" badge
export default function ItemStatus({ item }) {
  return item.stock > 1 ? (
    // In stock badge - black background with light text
    <span className="bg-black text-slate-200 py-1 px-2 rounded-[72px] ">
      In Stock
    </span>
  ) : (
    // Out of stock badge - red background with light text
    <span className="bg-red text-slate-200 py-1 px-2 rounded-[72px] ">
      Out of stock
    </span>
  );
}
