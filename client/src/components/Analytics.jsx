const Analytics = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">📊 Analytics</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Total Menu Items" value="8" />
        <Card title="Total Orders" value="0" />
        <Card title="Total Revenue" value="₹0" />
        <Card title="Available Items" value="8" />
      </div>

      <div className="mt-8 bg-white p-6 rounded-xl shadow">
        <p className="text-gray-600">
          Analytics will update automatically once orders are created.
        </p>
      </div>
    </div>
  );
};

const Card = ({ title, value }) => (
  <div className="bg-white p-6 rounded-xl shadow">
    <p className="text-gray-500">{title}</p>
    <h2 className="text-3xl font-bold mt-2">{value}</h2>
  </div>
);

export default Analytics;
