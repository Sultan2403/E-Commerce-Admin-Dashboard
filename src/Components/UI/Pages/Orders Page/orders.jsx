import OrdersCard from "./OrdersCard";
import useUsers from "../../../../Hooks/useUsers";
import useProducts from "../../../../Hooks/useProducts";

function Orders() {
  const { users, users_error, users_loading, awaitUsers } = useUsers();
  const { products, products_error, products_loading, awaitProducts } =
    useProducts();

  function retry_to_get_orders() {
    awaitProducts();
    awaitUsers();
  }

  if (products_loading || users_loading)
    return (
      <p className="m-auto self-center h-full flex items-center justify-center">
        Loading...
      </p>
    );
  if (products_error || users_error)
    return (
      <div className="w-full mx-auto p-10 flex-col gap-2 bg-slate-300 h-screen flex items-center justify-center">
        <p className="text-center text-red-600">Failed to load orders.</p>
        <button
          onClick={retry_to_get_orders}
          className=" text-center rounded-[12px] p-2 bg-indigo-800 text-white"
        >
          Retry
        </button>
      </div>
    );

  if (!products_loading && !users_loading) {
    return (
      <div className="overflow-auto flex flex-col bg-gray-50 gap-3 p-2 w-full h-full">
        {products.map((product, index) => (
          <OrdersCard
            key={product.id}
            product={product}
            customer={users[index]}
          />
        ))}
      </div>
    );
  }
}

export default Orders;
