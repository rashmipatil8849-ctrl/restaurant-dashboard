import axios from "axios";

const API =
  "https://restaurant-dashboard-backend-xmy6.onrender.com";

export const getOrders = () =>
  fetch(`${BASE_URL}/api/orders`).then(res => res.json());

export const createOrder = (data) =>
  fetch(`${BASE_URL}/api/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(res => res.json());


export const getMenuItems = async () => {
  const res = await axios.get(`${API}/menuItem`);
  return res.data;
};



export const deleteMenuItem = async (id) => {
  await fetch(`http://localhost:5000/api/menu/${id}`, {
    method: "DELETE",
  });
};

const BASE_URL = "http://localhost:5000/api";

// export const getOrders = async () => {
//   const res = await fetch(`${BASE_URL}/orders`);
//   return res.json();
// };

// export const createOrder = async (order) => {
//   const res = await fetch(`${BASE_URL}/orders`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(order),
//   });
//   return res.json();
// };

export const updateOrderStatus = async (id, status) => {
  const res = await fetch(`${BASE_URL}/orders/${id}/status`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });

  return res.json();
};

