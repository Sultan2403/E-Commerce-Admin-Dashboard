import { Eye } from "lucide-react";

function Orders({ orders, customers }) {
  let no_of_orders = 3;

  return (
    <div>
      {orders.map(() => {
        return (
          <div className="border-4 rounded-lg  m-6">
            <div className="grid grid-flow-col gap-10 m-5">
              <div className="">
                <h3>ORD-{0o0}</h3>
                <p>January 15, 2024</p>
              </div>

              <div className="flex flex-row gap-8 justify-end">
                <span className="bg-amber-200 border-2 rounded-lg w-20 h-8">
                  Pending
                </span>
                <div className="flex flex-row gap-2 border-2 w-20 h-9 rounded-lg ml-5 mr-5">
                  <Eye className="size-5 mt-1 ml-1" />
                  <span type="" className=" rounded-lg border-gray-500">
                    View
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-flow-col gap-72 m-5">
              <div className="">
                <h2>Customers</h2>
              </div>
              <div className="">
                <h2>Product</h2>
              </div>
              <div className="">
                <h2>Actions</h2>
                <select
                  name=""
                  id=""
                  className="w-96  p-2  bg-slate-200 rounded-lg"
                >
                  <option value="pending">Pending</option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Orders;
