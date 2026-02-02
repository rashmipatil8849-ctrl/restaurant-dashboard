import { useEffect, useState } from "react";
import { getOrders, updateOrderStatus } from "../api";
import { createOrder } from "../api";


function OrderManagement() {
  const [orders, setOrders] = useState([]);

  const loadOrders = async () => {
    const data = await getOrders();
    setOrders(data);
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const markDelivered = async (id) => {
    await updateOrderStatus(id, "Delivered");
    loadOrders();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        📦 Orders
      </h2>
      <button
  onClick={async () => {
    await createOrder({
      items: ["Veg Burger", "Cold Coffee"],
      total: 180,
    });
    loadOrders();
  }}
  className="mb-4 bg-green-600 text-white px-4 py-2 rounded"
>
  ➕ Create Sample Order
</button>


      {orders.length === 0 ? (
        <div className="bg-white p-6 rounded shadow">
          No orders yet.
        </div>
      ) : (
        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4">Order ID</th>
                <th className="p-4">Items</th>
                <th className="p-4">Total</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((o) => (
                <tr key={o._id} className="border-t">
                  <td className="p-4">{o._id.slice(-6)}</td>
                  <td className="p-4">{o.items.join(", ")}</td>
                  <td className="p-4 text-green-600 font-semibold">
                    ₹{o.total}
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        o.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {o.status}
                    </span>
                  </td>
                  <td className="p-4">
                    {o.status !== "Delivered" && (
                      <button
                        onClick={() => markDelivered(o._id)}
                        className="bg-purple-600 text-white px-4 py-1 rounded"
                      >
                        Mark Delivered
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default OrderManagement;
