import { useEffect, useState } from "react";
import { getMenuItems, deleteMenuItem } from "../api";


const selectedCategory = [
  "All",
  "Appetizer",
  "Main Course",
  "Dessert",
  "Beverage",
];

const icons = {
  "Appetizer": "🍟",
  "Main Course": "🍔",
  "Dessert": "🍰",
  "Beverage": "☕",
};

export default function MenuManagement() {
  const [menu, setMenu] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetchMenu();
  }, []);

  useEffect(() => {
  const fetchMenu = async () => {
    try {
      const data = await getMenuItems();
      console.log("MENU DATA:", data); // 👈 THIS LINE
      setMenu(data);
    } catch (err) {
      console.error("Failed to load menu", err);
    }
  };
  fetchMenu();
}, []);



  const fetchMenu = async () => {
    const data = await getMenuItems();
    setMenu(data);
  };

  const filteredMenu =
  selectedCategory === "All"
    ? menu
    : menu.filter((item) => item.category === selectedCategory);


  const handleDelete = async (id) => {
  if (!window.confirm("Delete this menu item?")) return;

  try {
    await deleteMenuItem(id);
    setMenu(menu.filter((item) => item._id !== id));
  } catch (err) {
    alert("Failed to delete item");
    console.error(err);
  }
};


  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
        🍽️ Menu Items
      </h2>

      {/* Category Filter */}
      <div className="flex gap-3 mb-6">
        {selectedCategory.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              category === cat
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Cards */}
      {filteredMenu.length === 0 ? (
        <p className="text-gray-500">No items found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredMenu.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow p-5 relative"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">
                  {icons[item.category] || "🍽️"}
                </span>
                <h3 className="font-semibold text-lg">{item.name}</h3>
              </div>

              <p className="text-sm text-gray-500 mb-1">
                {item.description}
              </p>

              <p className="text-sm text-gray-500">
                Category: {item.category}
              </p>

              <p className="text-green-600 font-bold mt-2">
                ₹{item.price}
              </p>

              <p className="text-sm text-gray-500">
                Prep Time: {item.preparationTime || "--"} mins
              </p>

              <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                {item.isAvailable ? "Available" : "Unavailable"}
              </span>

              <button
                onClick={() => handleDelete(item._id)}
                className="absolute top-3 right-3 text-red-500 text-sm"
              >
                ✖
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
