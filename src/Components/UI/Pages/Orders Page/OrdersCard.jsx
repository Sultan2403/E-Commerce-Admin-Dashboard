import { useState } from "react";
import { Eye, Phone, MapPin } from "lucide-react";

export default function OrdersCard({ product, customer }) {
  const num = product.stock / 2;
  const total = (num * product.price).toFixed(2);
  const [status, setStatus] = useState("Pending"); // default is Pending

  return (
    <div className="rounded-lg border p-6 space-y-6">
      {/* Top Row — Order ID + Date + Status + View */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold">ORD-{customer.id}</h3>
          <p className="text-sm text-gray-500">January 15, 2024</p>
        </div>

        <div className="flex items-center gap-4">
          {/* Status span */}
          <span
            className={`px-3 py-1 rounded-lg text-sm ${
              status === "Pending"
                ? "bg-yellow-200"
                : status === "Processing"
                ? "bg-blue-200"
                : "bg-green-200"
            }`}
          >
            {status}
          </span>

          <button className="flex items-center gap-2 border rounded-lg px-3 py-1">
            <Eye className="w-4 h-4" />
            <span>View</span>
          </button>
        </div>
      </div>

      {/* Middle Grid — Titles */}
      <div className="grid grid-cols-3 text-sm font-medium text-gray-600">
        <div>Customer</div>
        <div>Product</div>
        <div>Actions</div>
      </div>

      {/* Bottom Grid — Actual Data */}
      <div className="grid grid-cols-3 items-start">
        {/* Customer Info */}
        <div>
          <p className="font-semibold">{`${customer.firstName} ${customer.lastName}`}</p>
          <p className="flex items-center gap-1 text-gray-500">
            <Phone size={18} /> {customer.phone}
          </p>
          <p className="flex items-center gap-1 text-gray-500">
            <MapPin size={18} />{" "}
            {`${customer.address.address}, ${customer.address.state}, ${customer.address.stateCode}, ${customer.address.postalCode}`}
          </p>
        </div>

        {/* Product Info */}
        <div className="flex items-center gap-3">
          <img
            src={product.thumbnail}
            className="w-12 h-12 bg-gray-200 rounded object-contain"
          />
          <div>
            <p>{product.title}</p>
            <p className="text-sm text-gray-500">
              Qty: {num} × ${product.price} = ${total}
            </p>
          </div>
        </div>

        {/* Actions — Dropdown updates span */}
        <div className="flex flex-col justify-start">
          <span className="font-semibold">${total}</span>
          <select
            className="border rounded-lg p-2 w-48 bg-gray-100"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>
    </div>
  );
}
