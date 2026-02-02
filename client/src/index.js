const BASE_URL = "https://restaurant-dashboard-backend-xmy6.onrender.com";

// GET MENU
export const getMenuItems = async () => {
  const res = await fetch(`${BASE_URL}/api/menu`);
  if (!res.ok) throw new Error("Failed to fetch menu");
  return res.json();
};

// DELETE MENU
export const deleteMenuItem = async (id) => {
  const res = await fetch(`${BASE_URL}/api/menu/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete menu item");
};
