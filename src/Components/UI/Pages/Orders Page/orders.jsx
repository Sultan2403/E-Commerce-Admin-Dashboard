import OrdersCard from "./OrdersCard";
import useUsers from "../../../../Hooks/useUsers";
import useProducts from "../../../../Hooks/useProducts";

function Orders() {
  const { users, users_error, users_loading, awaitUsers } = useUsers();
  const { products, products_error, products_loading, awaitProducts } =
    useProducts();

  if (products_loading || users_loading)
    return (
      <p className="m-auto h-full flex items-center justify-center">
        Loading...
      </p>
    );
  if (products_error || users_error) null;

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
