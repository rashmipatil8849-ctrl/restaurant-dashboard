import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import DashboardOverview from "./components/DashboardOverview";
import MenuManagement from "./components/MenuManagement";
import OrderManagement from "./components/OrderManagement";
import Analytics from "./components/Analytics";
import Settings from "./components/Settings";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />

        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<DashboardOverview />} />
            <Route path="/menu" element={<MenuManagement />} />
            <Route path="/orders" element={<OrderManagement />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
