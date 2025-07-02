import * as React from 'react';

const OrdersTable: React.FC = () => {
  const orders = [
    {
      id: '#12345',
      customer: 'Nathaniel Jones',
      amount: '$120.00',
      status: 'Shipped',
      date: '07/17/2025',
    },
    {
      id: '#12344',
     customer: 'Nathaniel Jones',
      amount: '$120.00',
      status: 'Pending',
      date: '07/2/2025',
    },
    {
      id: '#12343',
      customer: 'Michael Johnson',
      amount: '$150.50',
      status: 'Delivered',
      date: '07/1/2025',
    },
  ];

const statusStyles: Record<string, React.CSSProperties> = {
  Shipped:   { backgroundColor: "#1d66e6", color: "#fff" },
  Pending:   { backgroundColor: "#fdbb4f", color: "#fff" },
  Delivered: { backgroundColor: "#34c19d", color: "#fff" },
};

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Recent Orders
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 text-sm font-semibold text-gray-600">
                Order ID
              </th>
              <th className="text-left py-3 text-sm font-semibold text-gray-600">
                Customer
              </th>
              <th className="text-left py-3 text-sm font-semibold text-gray-600">
                Amount
              </th>
              <th className="text-left py-3 text-sm font-semibold text-gray-600">
                Status
              </th>
              <th className="text-left py-3 text-sm font-semibold text-gray-600">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 text-sm font-medium text-gray-900">
                  {order.id}
                </td>
                <td className="py-4 text-sm text-gray-700">{order.customer}</td>
                <td className="py-4 text-sm font-semibold text-gray-900">
                  {order.amount}
                </td>
                <td className="py-4">
                  <span
                    className="inline-flex px-3 py-1 text-xs font-semibold rounded-md"
                    style={statusStyles[order.status]}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-4 text-sm text-gray-600">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;