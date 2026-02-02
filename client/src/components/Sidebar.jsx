import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-purple-700 text-white p-6">
      <h1 className="text-2xl font-bold mb-8">🍽 Bistro</h1>

      <nav className="space-y-4">
        <NavLink to="/" className="block p-2 rounded hover:bg-purple-600">
          Overview
        </NavLink>

        <NavLink to="/menu" className="block p-2 rounded hover:bg-purple-600">
          Menu
        </NavLink>

        <NavLink to="/orders" className="block p-2 rounded hover:bg-purple-600">
          Orders
        </NavLink>

        <NavLink to="/analytics" className="menu-link">
  Analytics
</NavLink>


        <NavLink to="/settings" className="block p-2 rounded hover:bg-purple-600">
          Settings
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
