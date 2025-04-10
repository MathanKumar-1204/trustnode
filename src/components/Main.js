import React from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Main = () => {
  // Static user data
  const username = "StaticUser";

  // Static data for the graph
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sample Data',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Trust <span className="text-purple-500">Node</span>
        </h1>
        <div className="flex items-center space-x-4">
          <div className="text-lg">Hi, {username}</div>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => alert("Logged out!")}
          >
            Logout
          </button>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Static Data Graph</h2>
        <div className="max-w-md mx-auto">
          <Bar data={data} />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Static Data Table</h2>
        <table className="min-w-full bg-white text-black">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Month</th>
              <th className="py-2 px-4 border-b">Value</th>
            </tr>
          </thead>
          <tbody>
            {data.labels.map((label, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{label}</td>
                <td className="py-2 px-4 border-b">{data.datasets[0].data[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <footer className="text-center text-gray-500 mt-auto">
        <p>Lock/Unlock App | T & C | Helpline</p>
        <p>© 2024 Trust Node</p>
      </footer>
    </div>
  );
};

export default Main;
