import { useEffect, useState } from "react";

function DashboardOverview() {
  const [stats, setStats] = useState({
    menuCount: 0,
    totalOrders: 0,
    pendingOrders: 0,
    revenue: 0,
  });

  useEffect(() => {
    // TEMPORARY STATIC DATA (simple & safe)
    // Later we can connect backend
    setStats({
      menuCount: 9,
      totalOrders: 3,
      pendingOrders: 1,
      revenue: 540,
    });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        📊 Dashboard Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Menu Items */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500">Menu Items</h3>
          <p className="text-3xl font-bold mt-2">{stats.menuCount}</p>
        </div>

        {/* Orders */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500">Total Orders</h3>
          <p className="text-3xl font-bold mt-2">{stats.totalOrders}</p>
        </div>

        {/* Pending */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500">Pending Orders</h3>
          <p className="text-3xl font-bold mt-2 text-yellow-500">
            {stats.pendingOrders}
          </p>
        </div>

        {/* Revenue */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500">Total Revenue</h3>
          <p className="text-3xl font-bold mt-2 text-green-600">
            ₹{stats.revenue}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;
