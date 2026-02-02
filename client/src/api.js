const API_URL = "https://restaurant-dashboard-backend-xmy6.onrender.com/api";

/* ================= MENU ================= */

// Get all menu items
export const getMenuItems = async () => {
  const res = await fetch(`${API_URL}/menu`);
  if (!res.ok) throw new Error("Failed to fetch menu");
  return res.json();
};

// Create menu item
export const createMenuItem = async (data) => {
  const res = await fetch(`${API_URL}/menu`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create menu item");
  return res.json();
};

// Delete menu item
export const deleteMenuItem = async (id) => {
  const res = await fetch(`${API_URL}/menu/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete menu item");
  return res.json();
};

/* ================= ORDERS ================= */

// Create order
export const createOrder = async (order) => {
  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });
  if (!res.ok) throw new Error("Failed to create order");
  return res.json();
};

// Get orders
export const getOrders = async () => {
  const res = await fetch(`${API_URL}/orders`);
  if (!res.ok) throw new Error("Failed to fetch orders");
  return res.json();
};

// Update order status
export const updateOrderStatus = async (id, status) => {
  const res = await fetch(`${API_URL}/orders/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  if (!res.ok) throw new Error("Failed to update order");
  return res.json();
};
