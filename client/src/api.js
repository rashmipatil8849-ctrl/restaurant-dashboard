const API_URL = "https://restaurant-dashboard-backend-xmy6.onrender.com/api";

/* ================= MENU ================= */

// Get menu items
export const getMenuItems = async () => {
  const res = await fetch(`${API_URL}/menu`);
  return res.json();
};

// Create menu item
export const createMenuItem = async (menuItem) => {
  const res = await fetch(`${API_URL}/menu`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(menuItem),
  });
  return res.json();
};

/* ================= ORDERS ================= */

// ✅ ADD THIS (THIS IS THE FIX)
export const createOrder = async (order) => {
  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });
  return res.json();
};

// Get orders
export const getOrders = async () => {
  const res = await fetch(`${API_URL}/orders`);
  return res.json();
};

// Delete menu item
export const deleteMenuItem = async (id) => {
  const res = await fetch(
    `https://restaurant-dashboard-backend-xmy6.onrender.com/api/menu/${id}`,
    {
      method: "DELETE",
    }
  );

  return res.json();
};

